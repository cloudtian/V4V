const LANG = {
    EN: 'en',
    CN: 'zh_CN'
};

let lang = LANG.EN;

require(`@/i18n/main/i18n-${lang}`);
