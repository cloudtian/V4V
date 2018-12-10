<template>
  <div id="app">
    <el-container>
      <el-header id="header">v4v</el-header>
    </el-container>
    <el-container id="body">
      <el-aside width="250px">
        <el-menu :router="true" default-active="1" :style="{height: '100%'}">
          <el-menu-item index="1" route="/">
            <i class="el-icon-location"></i>
            home
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <lang>vue</lang>
            </template>
            <el-submenu index="2-1">
              <template slot="title">
                <lang>生命周期</lang>
              </template>
              <el-menu-item index="2-1-0" route="/lifecycle/overview">
                <lang>概览</lang>
              </el-menu-item>
              <el-menu-item index="2-1-1">
                <lang>created</lang>
              </el-menu-item>
              <el-menu-item index="2-1-2">
                <lang>mounted</lang>
              </el-menu-item>
              <el-menu-item index="2-1-3">
                <lang>updated</lang>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <lang>es6</lang>
            </template>
            <el-menu-item index="2-1" route="/about">
              <template slot="title">
                <lang>导入导出</lang>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  color: #2c3e50;
}

#header {
  line-height: 60px;
  height: 60px;
  background: rgb(84, 92, 100);
  color: white;
}

#body {
    height: 500px;
    border:1px solid #eee
}
</style>
