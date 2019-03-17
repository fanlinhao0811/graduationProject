<template>
  <div class="wrapper">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <div class="right-con">
      <div class="navbar">
        <hamburger :toggle-click="toggleSideBar" :is-active="active" class="hamburger-container"/>
        <div class="right-menu">
          <span>{{name}}</span>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import { mapState } from 'vuex'

export default {
  components: {
    Hamburger
  },
  data () {
    return {
      isCollapse: false,
      active: true
    }
  },
  computed: mapState({
    name: state => state.info.name
  }),
  methods: {
    toggleSideBar () {
      this.isCollapse = !this.isCollapse
      this.active = !this.active
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrapper{
    display: flex;
    min-height: 100vh;
    overflow-y: scroll;
    font-size: 0.2rem;
  }
  .right-con{
    flex-grow: 1;
  }
  .el-breadcrumb{
    height: 200px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .navbar {
    height: 50px;
    overflow: hidden;

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }
  }
}
</style>
