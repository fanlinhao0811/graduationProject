<template>
  <div class="wrapper">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="()=>{ this.$router.push({ path: '/admin/user' })}">普通用户</el-menu-item>
          <el-menu-item index="1-2" @click="()=>{ this.$router.push({ path: '/admin/admin-user' })}">管理人员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">时刻</span>
      </el-menu-item>
      <el-menu-item index="3" @click="()=>{ this.$router.push({ path: '/admin/recommend' })}">
        <i class="el-icon-document"></i>
        <span slot="title">推荐</span>
      </el-menu-item>
      <el-menu-item index="4" @click="()=>{ this.$router.push({ path: '/admin/suggest' })}">
        <i class="el-icon-setting"></i>
        <span slot="title">监督</span>
      </el-menu-item>
    </el-menu>
    <div class="right-con">
      <div class="navbar">
        <hamburger :toggle-click="toggleSideBar" :is-active="active" class="hamburger-container"/>
        <div class="right-menu">
          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <span>{{name}}</span>
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>
                  首页
                </el-dropdown-item>
              </router-link>
              <router-link class="inlineBlock" to="/">
                <el-dropdown-item>
                  设置
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span style="display:block;" @click="logout">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import { mapState } from 'vuex'
import Cookies from 'js-cookie'

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
    },
    logout () {
      Cookies.remove('user')
      this.$router.push({ path: '/adminLogin' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  a{
    text-decoration: none;
  }
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
 .avatar-container {
      margin-right: 60px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        cursor: pointer;

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 22px;
          font-size: 14px;
        }
      }
    }
</style>
