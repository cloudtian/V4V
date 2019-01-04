<template>
  <div>
    <el-container>
      <el-header id="header">v4v</el-header>
    </el-container>
    <el-container id="body">
      <el-aside width="250px">
        <home-menu></home-menu>
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
import HomeMenu from './views/Menu.vue';

export default {
    name: 'Index',
    components: {
        HomeMenu
    }
};
</script>

<style>
#header {
  line-height: 60px;
  height: 60px;
  background: rgb(84, 92, 100);
  color: white;
}

#body {
  height: 500px;
  border: 1px solid #eee;
}
</style>
