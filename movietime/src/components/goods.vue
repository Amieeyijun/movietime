<template>
  <div>
    <div class="goodslist">
      <div class="mytitle">{{mytitle}}</div>
      <el-divider>
        <!-- 新品上架 | 超前预售 | 热销爆款 | 查看更多 -->
        {{lineguide}}
        <i class="el-icon-arrow-right"></i>
      </el-divider>
      <div class="box clear">
        <!-- 左边的大图片 -->
        <div class="bigimg">
          <img :src="bigimg" />
        </div>
        <!-- 右边8个小图片的盒子 -->
        <div class="smimgbox">
          <div
            :style="bcimgsrcs[index]"
            class="smimg"
            v-for="(img,index) in smimgdata"
            :key="(img,index)"
          >
            <div class="infobox">
              <p>{{img.name}}</p>
              <p>{{img.price}}</p>
              <div class="gwcar">
                <a
                  :href="'/Magnify?id='+img.id"
                  class="el-icon-shopping-cart-2"
                  style="font-size:20px"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data: function() {
    return {};
  },
  props: ["mytitle", "lineguide", "smimgdata", "bigimg"],
  computed: {
    //计算属性 bcimgsrc的值是一个数组
    bcimgsrcs: function() {
      return this.smimgdata.map(item => {
        return { backgroundImage: "url(" + item.img + ")" };
      });
    }
  }
};
</script>



<style scoped>
.goodslist {
  margin-top: 60px;
}
.mytitle {
  font-size: 30px;
}
.clear::after {
  clear: both;
}
.box {
  width: 100%;
  height: 580px;
  box-sizing: border-box;
  margin: 20px auto;
}
.bigimg {
  width: 23%;
  height: 100%;
  float: left;
}
.smimgbox {
  width: 75%;
  height: 100%;
  float: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.smimg {
  width: 24%;
  height: 48.8%;
  display: flex;
  align-items: flex-end;
  background-repeat: no-repeat;
}
.infobox {
  margin: 0 auto;
  position: relative;
}
.gwcar {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
</style>
