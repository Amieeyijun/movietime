<template>
  <div class="bigbox">
    <img :src="src" />
    <div class="bigbox_text">
      <div class="score">
        <b>总评分</b>
        <p>{{score}}</p>
      </div>
      <div class="movie_name">
        <h2>{{fileName}}</h2>
        <h3>{{duration}} -{{cate}}</h3>
      </div>
      <div class="movie_con">
        <img src="../../img/装饰用引号.png" alt />
        <p>{{comts}}</p>
      </div>
      <div class="movie_btn">
        <div class="price">
          <strong>{{price}}</strong>
        </div>
        <p>元起</p>
        <div class="ticket_buy" @click="buy">选座购票</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      score: "7.8",
      src: "http://img5.mtime.cn/mt/2019/05/31/163639.93224012_270X360X4.jpg",
      fileName: "蜘蛛侠：英雄远征",
      duration: "127分钟",
      cate: "动作 / 冒险",
      comts: "蜘蛛侠劫后重生决战千里",
      price: "28"
    };
  },
  created() {
    //   请求数据
    this.axios.get();
  },
  methods: {
    buy() {
      this.$router.push({
      });
    }
  }
};
</script>
<style scoped>
.bigbox {
  width: 272px;
  height: 531px;
}
.bigbox img {
  width: 272px;
  height: 362px;
}
.bigbox_text {
  width: 272px;
  height: 159px;
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.score {
  width: 52px;
  height: 52px;
  color: white;
  background-color: #669c20;
}
.score b {
  display: block;
  line-height: 1em;
  padding: 8px 0 4px;
  font-weight: 400;
  font-size: 12px;
}
.score p {
  font-size: 24px;
  line-height: 1em;
}
.movie_name {
  width: 200px;
  height: 52px;
  padding-top: 8px;
  box-sizing: border-box;
  text-align: start;
}
.movie_name h2 {
  font-weight: 400;
  font-size: 20px;
  color: #333;
}
.movie_name h3 {
  font-size: 14px;
  font-weight: 400;
}
.movie_con {
  width: 272px;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  text-align: start;
}
.movie_con img {
  width: 23px;
  height: 23px;
  opacity: 0.2;
  display: inline-block;
}
.movie_con p {
  display: inline-block;
  color: #679c21;
  font-size: 18px;
}
.movie_btn {
  width: 272px;
  height: 61px;
  display: flex;
  /* line-height: 61px; */
  font-size: 12px;
}
.price {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.price strong {
  font-size: 54px;
  line-height: 1em;
}
.ticket_buy {
  width: 155px;
  border-radius: 40px;
  height: 46px;
  font-size: 24px;
  line-height: 46px;
  letter-spacing: 2px;
  background: #0081bc;
  color: #fff;
  margin-top: 12px;
  margin-left: 24px;
}
.movie_btn p {
  display: inline-block;
  width: 35px;
  line-height: 80px;
}
</style>

