/**
 * @file disallow to use <lang> in html attribute
 * like: placeholder="<lang>名称</lang>"
 */

'use strict';

//------------------
// Rule Definition
//------------------

const utils = require('eslint-plugin-vue/lib/utils');

module.exports = {
    meta: {
        docs: {
            description: 'disallow use <lang> in html attribute'
        },
        fixable: 'code'
    },
    create (context) {
        return utils.defineTemplateBodyVisitor(context, {
            VAttribute (node) {
                if (!node.value) {
                    return;
                }

                const sourceCode = context.getSourceCode();

                let text = sourceCode.getText(node);

                // 属性中没有<lang>直接return
                if (!/<lang>/.test(text)) {
                    return;
                }

                context.report({
                    node: node.value,
                    message: `Not allow '<lang>' in attribute`,
                    fix (fixer) {

                        // 如果<lang>周围不是紧跟着引号，则不修复
                        if (/([^\'\"]<lang>)|(<\/lang>[^\'\"])/.test(text)) {
                            return;
                        }

                        // 不是指令时需要改成指令
                        if (!node.directive) {
                            text = ':' + text;
                        }

                        text = text.replace(/\'?\<lang\>(.*?)\<\/lang\>\'?/g, '_(\'$1\')');

                        return fixer.replaceText(node, text);
                    }
                });
            }
        });
    }
};
