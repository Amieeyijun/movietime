<template>
  <div class="rou">
    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

    <div class="brou">
      <el-carousel :interval="5000" arrow="always" @change="fm" :autoplay="false">
        <el-carousel-item>
          <img src="http://img5.mtime.cn/mg/2019/07/09/143021.81495753.jpg" alt />
          <span>《狮子王》</span>
          <span>7月12日 - 全国上映</span>
          <span>3388人想看 - 动画/冒险 - 成都319家影院超前预售</span>
        </el-carousel-item>
        <el-carousel-item>
          <img src="http://img5.mtime.cn/mg/2019/06/21/100738.80882666.jpg" alt />
          <span>《千与千寻》</span>
          <span class="qian_time">125分钟 - 动画/冒险</span>
          <span>宫崎骏获奥斯卡之作</span>
        </el-carousel-item>
        <el-carousel-item>
          <img src="http://img5.mtime.cn/mg/2019/06/24/114423.64885932.jpg" alt />
          <span>《蜘蛛侠·英雄远征》</span>
          <span>127分钟 - 动作/冒险</span>
          <span>蜘蛛侠劫后重生决战千里</span>
        </el-carousel-item>
      </el-carousel>
    </div>
     </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: [
        {
          ims: require("../../img/lion.png")
        },
        {
          ims: require("../../img/qian.png")
        },
        {
          ims: require("../../img/spiderman.png")
        }
      ],
      i: 0
    };
  },
  methods: {
    fm: function(index) {
      var rou = document.getElementsByClassName("rou")[0];
      rou.style.background = `url(${this._data.list[index].ims})`;
      rou.style.backgroundRepeat = "no-repeat";

      rou.style.backgroundSize = "100% 100%"

    }
  }
};
</script>
<style lang="scss" >
* {
  padding: 0px;
  margin: 0px;
}
.el-col {
  border-radius: 4px;
}
.brou .el-carousel__container {
  height: 388px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n) {

  background-color: white;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: white;

}
.rou {
  height: 388px;
}
.brou {
  width: 1000px;
  height: 388px;
  margin: auto;
  border: 2px solid transparent;
  position: relative;
  box-sizing: border-box;
}
.brou img {
  width: 1000px;
  height: 388px;
}
.brou span:nth-of-type(1) {
  position: absolute;
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  left: 70px;
  top: 176px;
}
.brou span:nth-of-type(2) {
  position: absolute;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  left: 70px;
  top: 225px;
}
.brou span:nth-of-type(3) {
  position: absolute;
  color: #fff;
  font-size: 16px;
  left: 70px;
  top: 280px;
}
.brou .qian_time {
  position: absolute;
  color: #fff;
  font-size: 16px;
  left: 70px;
  top: 280px;
}
</style>


