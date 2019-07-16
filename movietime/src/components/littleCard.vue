<template>
  <div class="bigbox">
    <div  class="imgbox">
      <img :src="mysrc" />
      <span>{{mysroce}}</span>
    </div>
    <div class="text">
      <h3>{{myname}}</h3>
      <p>{{myduration}} - {{mytype}}</p>
      <p>95家影院上映760场</p>
      <div class="movie_con">
        <img src="../../img/上引号.png" alt />
        <p>{{mycont}}</p>
      </div>
      <div class="buy" @click="fn" >选座购票</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  props:['mysrc','mysroce','myname','myduration','mytype','mycont'],
  methods:{
    fn(){
      console.log(this)
    }
    
  }
};
</script>
<style scoped>
.bigbox {
  width: 320px;
  height: 165px;
  margin: 0 0 20px 10px;
  display: flex;
  justify-content: space-between;
}
.bigbox img {
  width: 102px;
  height: 142px;
}
.bigbox .text {
  width: 205px;
  height: 165px;
  /* background-color: pink; */
  text-align: start;
}
.imgbox {
  position: relative;
}
.imgbox span {
  background: #679c21;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  height: 20px;
  padding: 0 5px;
  position: absolute;
  bottom: 16px;
  right: -5px;
}
.text h3 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}
.text h3:hover {
  color: #08c;
}
.text p {
  display: block;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
}
.movie_con {
  display: flex;
  margin-top: 10px;
}
.movie_con img {
  opacity: 0.2;
  width: 23px;
  height: 23px;
}
.movie_con p {
  color: #679c21;
  font-size: 14px;
  line-height: 20px;
  display: block;
}
.buy {
  width: 94px;
  height: 25px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  text-decoration: none;
  margin-left:  5px;
  margin-top: 24px
}
</style>


