<template>
  <div class="bigbox">
    <div class="divider"></div>
    <ul class="circle">
      <li>
        <img src="../../img/circle.png" />
      </li>
    </ul>
    <div class="title">
      <h3>{{mydate}}</h3>即将上映
    </div>
    <div class="film">
      <img :src='mysrc' />
      <div class="file_name">
        <h3>{{myname}}</h3>
        <p>{{myheat}}人想看 - {{mytype}}</p>
        <p>导演：{{mydirector}}</p>
        <div class="trailer">
          <p>预告片</p>
          <img src="../../img/play.png" />
        </div>
        <div class="presell">超前预售</div>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  props:['mysrc','myname','myheat','mytype','mydirector','mydate']
};
</script>
<style scoped>
.bigbox {
  width: 295px;
  min-height: 217px;
  margin: auto;
  position: relative;
}
.divider {
  border-top: #d9d9d9 2px dashed;
  overflow: hidden;
  height: 2px;
}
.circle {
  list-style: none;
  display: flex;
  position: absolute;
  left: 3px;
  top: -8px;
}
.circle li {
  width: 17px;
  height: 17px;
  position: absolute;
  left: -5px;
}
.circle li img {
  width: 100%;
  height: 100%;
  background-color: white;
}
.title h3 {
  font-size: 20px;
  line-height: 1em;
  font-weight: normal;
  display: inline-block;
}
.title {
  color: #7b7b7b;
  font-size: 14px;
  margin-top: 10px;
  text-align: start;
  margin-top: 10px;
}
.film {
  width: 295px;
  height: 152px;
  /* background-color: #7b7b7b; */
  margin-top: 17px;
  display: flex;
  justify-content: space-between;
}
.film img{
  width:102px;
  height: 152px
}
.file_name {
  padding: 7px;
  width: 178px;
  height: 152px;
  /* background-color: pink; */
  text-align: start;
  box-sizing: border-box;
}
.file_name h3 {
  height: 20px;
  padding-top: 7px;
  font-size: 16px;
  font-weight: normal;
  overflow: hidden;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  white-space:nowrap

}
.file_name p {
  color: #323232;
  font-size: 14px;
  display: inline-block;
  margin-right: 10px;
}
.trailer {
  display: flex;
  margin-top: 5px;
}
.trailer img {
  width: 20px;
  height: 20px;
}
.file_name .presell {
  background: #5eae2b;
  width: 94px;
  height: 25px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  margin-top: 25px;
}
</style>
