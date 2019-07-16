<template>
  <div id="app">
    <el-tooltip placement="top" content="返回顶部">
      <back-to-top
        transitionName="fade"
        :customStyle="myBackToTopStyle"
        :visibilityHeight="300"
        :backPosition="0"
      ></back-to-top>
    </el-tooltip>
    <router-view />
  </div>
</template>
<script>
import BackToTop from "@/components/rightMenu";
export default {
  data() {
    return {
      myBackToTopStyle: {
        right: "30px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "20px",
        "line-height": "40px",
        background: "#fff"
      }
    };
  },
  components: {
    BackToTop
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

