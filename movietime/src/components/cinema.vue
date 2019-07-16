<template>
  <div class="mycontain_title">
    <h2>
      成都
      <span>173</span>
      家影院
    </h2>
    <div class="cate">
      <ul>
        <li>
          商圈及地铁沿线
          <img src="../../img/xiala.png" />
        </li>
        <li>
          |
          <input type="checkbox" name="ticket" />
          购票
        </li>
        <li>
          <input type="checkbox" name="port" id />
          停车场
        </li>
        <li>
          <input type="checkbox" name="3d" id />
          3D
        </li>
        <li>
          <input type="checkbox" name="iMAX" id />
          IMAX
        </li>
        <li>
          <input type="checkbox" name="4DX" id />
          4DX
          |
        </li>
      </ul>
    </div>
    <div class="sereach">
      <input type="text" placeholder="搜索影院" />
      <img src="../../img/sereach.png" @click="fm" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fm() {
      this.$router.push({
        path:
          "http://search.mtime.com/search/?t=1&q=%E6%90%9C%E7%B4%A2%E5%BD%B1%E7%89%87"
      });
    }
  }
};
</script>
<style scoped>
.mycontain_title {
  width: 1000px;
  height: 53px;
  border-bottom: 1px solid #a9a9a9;
  display: flex;
  line-height: 53px;
}
.mycontain_title h2 {
  width: 210px;
  height: 53px;
  display: block;
  font-size: 20px;
  color: #333;
  font-weight: 400;
  border-left: 10px solid #ff6d00;
}
.mycontain_title h2 span {
  font-size: 34px;
  padding: 0 8px;
  font-weight: 400;
}
.cate {
  width: 500px;
  height: 24px;
  padding: 0 8px;
  margin-left: 20px;
}
.cate ul {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  font-size: 14px
}
.cate li {
  margin-right: 10px;
  text-align: center;
}
.cate li:nth-of-type(1) img {
  width: 12px;
  height: 6px;
}
/* 搜索框样式 */
.sereach {
  width: 205px;
  height: 30px;
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1) inset;
  line-height: 30px;
  margin-top: 10px;
  margin-left: 65px;
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
}
.sereach input {
  width: 150px;
  height: 27px;
  line-height: 27px;
  border-radius: 3px;
  border: transparent;
  color: #d0d0d0;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: #d0d0d0;
}
.sereach img {
  width: 26px;
  height: 26px;
}
</style>


