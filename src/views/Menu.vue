<template>
  <v4v-menu :menuData="menuData" :default-active="defaultActive"></v4v-menu>
</template>

<script>

import V4vMenu from 'components/menu/index.vue';

const DEFAULT_ACTIVE = '/';

export default {

    name: 'Menu',

    components: {
        V4vMenu
    },

    data () {
        return {
            defaultActive: this.$route.path || DEFAULT_ACTIVE,
            menuData: [{
                index: '/',
                icon: 'el-icon-location',
                text: 'home'
            }, {
                index: '2',
                icon: 'el-icon-location',
                text: 'vue',
                children: [{
                    index: '2-1',
                    text: 'lifecycle',
                    children: [{
                        index: '/lifecycle-overview',
                        text: 'overview'
                    }, {
                        index: '2-1-1',
                        text: 'created'
                    }, {
                        index: '2-1-2',
                        text: 'mounted'
                    }, {
                        index: '2-1-3',
                        text: 'updated'
                    }]
                }, {
                    group: {
                        text: 'group',
                        items: [{
                            index: '2-2',
                            text: 'group1'
                        }, {
                            index: '2-3',
                            text: 'group2'
                        }]
                    }
                }]
            }, {
                index: '3',
                icon: 'el-icon-location',
                text: 'es6',
                children: [{
                    index: '/about',
                    text: 'export/import'
                }]
            }]
        };
    }
};

</script>
