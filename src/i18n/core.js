import Vue from 'vue';

let mLang = {};

let _ = function (str) {
    let args = Array.prototype.slice.call(arguments, 1);

    str = mLang.hasOwnProperty(str) ? mLang[str] : str;

    /**
     * 字符串中可以包含形如{#mark#}的文本，用于附加额外语境信息。
     * 例如中文里的“启用”，可以是形容词，表示此条记录启用；也可以是动词，表示点击即启用此记录；
     * 如果没有额外标识，翻译成英文只能有一个结果，但是实际上应该分别翻译为“Enabled”与“Enable”。
     * 启用{#adj#} -> Enabled
     * 启用{#verb#} -> Enable
     */
    return str.replace(/\{(\d+|#[\w,]+#)\}/g, (m, i) => {
        i = parseInt(i, 10);

        if (isNaN(i)) {
            return '';
        }

        if (i >= 0 && i < args.length) {
            return args[i];
        }

        return m;
    });
};

export function setLang (lang) {
    mLang = lang;
}

Vue.prototype._ = window._ = _;
