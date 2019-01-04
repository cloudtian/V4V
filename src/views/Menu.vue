<template>
  <!-- <el-menu :router="true"
           :default-active="defaultActive"
           :style="{height: '100%'}">
    <el-menu-item index="/">
      <i class="el-icon-location"></i>
      home
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        vue
      </template>
      <el-submenu index="2-1">
        <template slot="title">生命周期</template>
        <el-menu-item index="/lifecycle-overview">概览</el-menu-item>
        <el-menu-item index="2-1-1">created</el-menu-item>
        <el-menu-item index="2-1-2">mounted</el-menu-item>
        <el-menu-item index="2-1-3">updated</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <template slot="title">分组</template>
        <el-menu-item index="2-2">待定1</el-menu-item>
        <el-menu-item index="2-3">待定2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        es6
      </template>
      <el-menu-item index="/about">导入导出</el-menu-item>
    </el-submenu>
  </el-menu> -->
  <v4v-menu :menuData="menuData"></v4v-menu>
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
					}]
				}, {
					group: {
						text: 'group',
						items: [{
							index: '2-2',
							text: 'group1'
						}]
					}
				}],
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
