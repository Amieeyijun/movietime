<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo top-son clear"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div id="title">
        <img src="../../img/title1.jpg" alt />
      </div>
      <div class="top-1">
        <el-menu-item index="1" style=" letter-spacing: 20px;text-align: center;">首页</el-menu-item>

        <el-menu-item index="2" style=" letter-spacing: 20px; text-align: center;">购票</el-menu-item>

        <el-menu-item index="3" style=" letter-spacing: 10px;text-align: center;">正版商城</el-menu-item>
        <el-menu-item index="4" style=" letter-spacing: 20px;text-align: center;">新闻</el-menu-item>
        <el-menu-item index="5" style=" letter-spacing: 20px; text-align: center;">发现</el-menu-item>
      </div>

      <el-menu-item index="10" class="el-icon-shopping-bag-2 right1"></el-menu-item>
      <el-menu-item index="7" class="el-icon-user right2"></el-menu-item>
    </el-menu>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "7":
          this.$router.push({ path: "/Load" });
          break;
        case "1":
          this.$router.push({ path: "/" });
          break;
          case "2":
          this.$router.push({ path: "/Ticket" });
          break;
          case "3":
          this.$router.push({ path: "/Mall" });
          break;
          case "4":
          this.$router.push({ path: "/News" });
          break;
          case "5":
          this.$router.push({ path: "/Discover" });
          break;
          case "10":
          this.$router.push({ path: "/Shopping" });
          break;
        default:
          break;
      }
    }
  },
  created() {
    if (this.$route.path == "/Registe") {
      this.activeIndex2 = "7";
    } else if (this.$route.path == "/") {
      this.activeIndex2 = "1";
    }
    else if (this.$route.path == "/Ticket") {
      this.activeIndex2 = "2";
    }
    else if (this.$route.path == "/Mall") {
      this.activeIndex2 = "3";
    }
    else if (this.$route.path == "/News") {
      this.activeIndex2 = "4";
    }
    else if (this.$route.path == "/Discover") {
      this.activeIndex2 = "5";
    }
    else if(this.$route.path == "/Shopping") {
      this.activeIndex2 = "10";
    }else if(this.$route.path == "/Load") {
      this.activeIndex2 = "7";
    }
    
  }
};
</script>
<style>
.el-menu--horizontal>.el-menu-item{
  margin-left: 24px;
  height: 56px;
}
#title img{
  width: 170px;
  height: 75px;
  margin-top:-10px 
}
#title{
  width: 170px;
  height: 56px;
  overflow: hidden;
  float: left;
}

.right1{
  position: absolute;
  right: 6%;
  float: left;
}
.right2{
  position: absolute;
  right: 2%;
  float: left;
}
.top-1 {
  width: 60%;
  display: flex;
  justify-content: space-around;
  float: left;
}
.clear::after {
  content: "";
  display: block;
  clear: both;
}
</style>


