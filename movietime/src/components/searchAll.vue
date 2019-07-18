<template>
  <div>
    <top-menu></top-menu>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="black"
      >
        <el-menu-item index="1" style="font-size: 16px;font-weight: 600;margin-left:7em">全部商品</el-menu-item>
        <el-menu-item index="2" style="font-size: 16px;font-weight: 600;">新品</el-menu-item>
      </el-menu>
    </div>
    <div class="goodsclass">
      <div v-for="(gsd,index) in goodsdata" :key="(gsd,index)">
        <my-gsulike
          :mysrc="gsd.img"
          :goodsname="gsd.name"
          :price="gsd.price"
          :myalt="gsd.name"
          :id="gsd.id"
        ></my-gsulike>
      </div>
    </div>
    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import gsulike from "./guessulikegoods.vue";
export default {
  data: function() {
    return {
      activeIndex: "1",
      goodsdata: []
    };
  },
  components: {
    "my-gsulike": gsulike
  },
  created: function() {
    this.axios
      .get("http://localhost:8888/searchinput", {
        params: {
          goodsname: this.$route.query.goodsname
        }
      })
      .then(res => {
        this.goodsdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.goodsdata = this.$store.state.goodsdata;
    console.log(this.goodsdata + "---------created");
  }
};
</script>


<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: 1px solid transparent;
}
.goodsclass {
  width: 73.77375em;
  margin: 2em auto 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.goodsclass > div {
  width: 20%;
}
</style>


