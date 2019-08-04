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
        <el-menu-item index="1" style=" text-align: center;">首页</el-menu-item>

        <el-menu-item index="2" style="  text-align: center;">购票</el-menu-item>

        <el-menu-item index="3" style=" text-align: center;">正版商城</el-menu-item>
        <el-menu-item index="4" style=" text-align: center;">新闻</el-menu-item>
        <el-menu-item index="5" style=" l text-align: center;">发现</el-menu-item>
      </div>

      <el-menu-item index="10" class="el-icon-shopping-bag-2 right1">
        <div class="num">{{this.$store.getters.shopcarnum}}</div>
      </el-menu-item>
      <el-menu-item index="7" class="el-icon-user right2" v-show="flag"></el-menu-item>

      <el-menu-item v-show="flag1" class="fr denglu">
        <el-dropdown>
          <span class="el-dropdown-link">
            <a href="#">欢迎您,{{name}}！</a>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a class="myps" href="#">个人信息</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a class="myps" href="#">修改信息</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="ulogout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex2: "1",
      name: "",
      flag: true,
      flag1: false,
      userAll: "",
      userone: {}
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
    },
    ulogout() {
      this.flag = true;
      this.flag1 = false;
      sessionStorage.clear();
    }
  },
  created() {
    if (this.$route.path == "/Registe") {
      this.activeIndex2 = "7";
    } else if (this.$route.path == "/") {
      this.activeIndex2 = "1";
    } else if (this.$route.path == "/Ticket") {
      this.activeIndex2 = "2";
    } else if (this.$route.path == "/Mall") {
      this.activeIndex2 = "3";
    } else if (this.$route.path == "/News") {
      this.activeIndex2 = "4";
    } else if (this.$route.path == "/Discover") {
      this.activeIndex2 = "5";
    } else if (this.$route.path == "/Shopping") {
      this.activeIndex2 = "10";
    } else if (this.$route.path == "/Load") {
      this.activeIndex2 = "7";
    }

    this.userAll = window.sessionStorage.getItem("user");
    console.log(this.userAll);
    this.userone = JSON.parse(this.userAll);
    console.log(this.userone);
    if (this.userone.username) {
      this.flag = false;
      this.flag1 = true;
      this.name = this.userone.username;
    } else {
      this.flag = true;
      this.flag1 = false;
    }
  }
};
</script>
<style>
.el-menu--horizontal > .el-menu-item {
  margin-left: 24px;
  height: 56px;
}
#title img {
  width: 170px;
  height: 75px;
  margin-top: -10px;
}
#title {
  width: 170px;
  height: 56px;
  overflow: hidden;
  float: left;
}

.right1 {
  position: absolute;
  right: 6%;
  font-size: 24px;
}
.num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f56c6c;
  color: white;
  position: absolute;
  top: 14px;
  left: 34px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
}
.right2 {
  font-size: 24px;
  position: absolute;
  right: 1%;
}
.top-1 {
  width: 34%;
  display: flex;
  justify-content: space-around;
  float: left;
}
.clear::after {
  content: "";
  display: block;
  clear: both;
}
.fr {
  position: absolute;
  right: 11%;
}
</style>

<style scoped>
.fr a {
  color: white;
}
</style>

