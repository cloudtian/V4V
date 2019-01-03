<template>
  <el-menu :router="true" default-active="1" :style="{height: '100%'}">
    <el-menu-item index="1" route="/">
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
        <el-menu-item index="2-1-0" route="/lifecycle-overview">概览</el-menu-item>
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
      <el-menu-item index="2-1" route="/about">导入导出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
