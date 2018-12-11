import Vue from 'vue';

let component = {
    methods: {
        _renderHTML () {
            let slotText = this.$slots.default[0].text;

            let attrMap = {};

            let attrs;

            if (!this.$isMounted) {
                return slotText;
            }

            attrs = this.$el.attributes;

            Object.keys(attrs).forEach((key) => {
                let attr = attrs[key];

                attrMap[attr.nodeName] = attr.nodeValue;
            });

            slotText = _(slotText);

            return slotText.replace(/\{(.+?)\}/g, (match, i) => {
                return attrMap[i] || '';
            });
        }
    },

    mounted () {
        this.$isMounted = true;
        this.$forceUpdate();
    },

    render (createElem) {
        return createElem('span', {
            attrs: {
                class: 'language-wrap'
            }
        }, this._renderHTML());
    }
};

Vue.component('lang', component);
