<template>
  <div class="reseach">
    <div class="reseach_midbox">
      <div class="adress">
        <h2>成都</h2>
        <a href="#">切换城市</a>
      </div>
      <div class="inp">
        <div class="inp_movie">
          <span>选电影</span>
          <img src="../../img/select.png" alt />
        </div>
        <div class="inp_movie">
          <span>选影院</span>
          <img src="../../img/select.png" alt />
        </div>
        <div class="inp_movie">
          <span>选时间</span>
          <img src="../../img/select.png" alt />
        </div>
        <div class="inp_ticket">选座购票</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.reseach {
  width: 100%;
  height: 76px;
  background-color: #333333;
  border-top: 1px solid #515151;
}
.reseach_midbox {
  width: 1000px;
  height: 75px;
  margin: auto;
  display: flex;
}
.adress {
  color: white;
  width: 160px;
  height: 100%;
  line-height: 75px;
  display: flex;
}
.adress h2 {
  margin-right: 10px;
  font-size: 20px;
}
.adress a {
  color: #fff;
  font-size: 14px;
}
.inp {
  width: 712px;
  height: 36px;
  border-left: 1px solid #6c6c6c;
  margin: 20px 0 0 20px;
  padding: 0 0 0 30px;
  display: flex;
}
.inp .inp_movie {
  background: #f5f5f5;
  border-radius: 20px;
  height: 36px;
  line-height: 36px;
  padding: 0 5px 0 0;
  font-size: 14px;
  margin: 0 8px 0 0;
}
.inp_movie span {
  display: inline-block;
  padding: 0 30px 0 10px;
  min-width: 110px;
  width: 110px;
  position: relative;
  text-align: start;
}
.inp_movie img {
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  vertical-align: middle;
}
.inp_ticket {
  line-height: 36px;
  height: 36px;
  font-size: 18px;
  width: 120px;
  vertical-align: top;
  background: #ccc;
  cursor: default;
  color: #666;
  border-radius: 20px;
}
</style>


