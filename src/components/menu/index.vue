<script>

/**
 * 根据数据生成导航菜单栏
 *
 * menuData: [{
 *  index: String,
 *  icon: String,
 *  text: String,
 *  children: [{}],
 *
 *  group: {
 *    text: String,
 *    item: [{}]
 *  }
 * }]
 */
export default {

    props: {
        menuData: {
            type: Array,
            default: () => []
        },
        defaultActive: {
            type: String
        }
    },

    render (createElement) {
        let data = this.menuData;

        function getMenuItem ({index, icon, text}) {
            return createElement('el-menu-item', {
                attrs: {
                    index: index
                }
            }, [
                icon ?
                createElement('i', {
                    class: icon
                }) : '',
                text
            ]);
        };

        function getMenuTemplate (item) {
            if (item.group) {
                return createElement('el-menu-item-group', {}, [
                    createElement('template', {
                        slot: 'title'
                    }, [
                        item.group.icon ?
                        createElement('i', {
                            class: item.group.icon
                        }) : '',
                        item.group.text
                    ]),
                    ...(item.group.items || []).map(i => getMenuTemplate(i))
                ]);
            }

            if (item.children) {
                return createElement('el-submenu', {
                    attrs: {
                        index: item.index
                    }
                }, [
                    createElement('template', {
                        slot: 'title'
                    }, [
                        item.icon ?
                        createElement('i', {
                            class: item.icon
                        }) : '',
                        item.text
                    ]),
                    ...(item.children || []).map(i => getMenuTemplate(i))
                ]);
            }

            return getMenuItem(item);
        }

        let menuItems = (data || []).map(item => {
            return getMenuTemplate(item);
        });

        return createElement('el-menu', {
            props: {
                router: true,
                'default-active': this.defaultActive
            },
            style: {
                height: '100%'
            }
        }, menuItems);
    }
}
</script>
