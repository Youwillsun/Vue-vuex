<template>
  <div id="app">
    <h1>{{count}}</h1>
    <h2>{{myCount}}</h2>
    <h3>user:{{user}}</h3>
    <h4>{{userGetter}}</h4>
    <router-view />
  </div>
</template>

<script>
  // 映射vuex中state的数据
  import { mapState, mapGetters } from 'vuex';
  export default {
    name:'App',

    computed: {
      // 解构赋值
      // ...mapState(['count']),
      // 由于state归类到了app里，所以要进行映射,直接使用count是取不到的
      ...mapState({
        count: state => {
          return state.app.count
        },
        user: state => {
          return state.user.userInfo
        }
      }),
      ...mapGetters(['myCount','userGetter'])
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>