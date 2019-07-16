<template>
  <div class="bigbox">
    <div class="movieinfo">
      <div class="movieinfo_logo">
        <img :src="mysrc" />
      </div>
      <div class="movieinfo_ad">
        <h2>{{myname}}</h2>
        <p>{{mysite}}</p>
        <div class="movieinfo_ad_img">
          <div class="movieinfo_ad_img_big">
            <img src="../../img/3D.png" alt />
          </div>
          <div class="movieinfo_ad_img_big">
            <img src="../../img/vip.png" alt />
          </div>
          <div class="movieinfo_ad_img_small">
            <img src="../../img/glass.png" alt />
          </div>免押金
          <div class="movieinfo_ad_img_small">
            <img src="../../img/parting.png" alt />
          </div>可停车
          <div class="movieinfo_ad_img_small">
            <img src="../../img/card.png" alt />
          </div>刷卡
          <div class="movieinfo_ad_img_small">
            <img src="../../img/WIFI.png" alt />
          </div>Wifi
          <div class="movieinfo_ad_img_small">
            <img src="../../img/disabilities.png" />
          </div>无障碍
        </div>
        <div class="price">
          <div class="price_lowest">
            ￥
            <h3>{{myprice}}</h3>元起
          </div>
          <div class="price_buy">选座购票</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["mysrc", "myname", "mysite",'myprice']
};
</script>
<style scoped>
.bigbox {
  width: 680px;
  height: 163px;
  border-bottom: 1px solid #e8e8e8;
  padding: 1px;
}
.movieinfo {
  margin-top: 27px;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.movieinfo_logo {
  width: 102px;
  height: 63px;
}
.movieinfo_logo img {
  width: 100%;
  height: 100%;
}
.movieinfo_ad {
  width: 555px;
  min-height: 108px;
  /* background-color: pink; */
  text-align: start;
}
.movieinfo_ad h2 {
  font-size: 24px;
  font-weight: 400;
  color: #333;
}
.movieinfo_ad p {
  font-size: 14px;
  display: block;
  margin-top: 15px;
}
.movieinfo_ad_img {
  display: flex;
  margin-top: 10px;
  font-size: 12px;
}
.movieinfo_ad_img_big {
  width: 46px;
  height: 22px;
  background-color: #679f42;
  border-radius: 3px;
  line-height: 2.5em;
  text-align: center;
  margin: 0px 3px;
}
.movieinfo_ad_img_small {
  width: 24px;
  height: 22px;
  background-color: #679f42;
  border-radius: 3px;
  line-height: 2.5em;
  text-align: center;
  margin: 0px 3px;
}
.movieinfo_ad_img img {
  width: 16px;
  height: 16px;
}
.price {
  width: 126px;
  height: 68px;
  position: absolute;
  border-color: #ccc;
  left: 568px;
  top: 58px;
}
.price_lowest {
  display: flex;
  color: #f77603;
  font-size: 14px;
  line-height: 34px;
}
.price_lowest h3 {
  font-size: 30px;
  font-weight: 400;
}
.price_buy {
  width: 115px;
  height: 32px;
  line-height: 28px;
  font-size: 14px;
  background-color: #1f7dd7;
  border-radius: 20px;
  color: white;
  text-align: center;
}
</style>
