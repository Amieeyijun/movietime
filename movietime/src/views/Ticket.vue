<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <!-- 导航栏 -->
        <div class="guide">
          <top-menu></top-menu>
        </div>
        <!-- 轮播图 -->
        <div class="rousel">
          <rousel></rousel>
        </div>
        <!-- 中间导航 -->
        <div>
          <guide></guide>
        </div>
        <!-- 购票详情 -->
        <div class="midbox">
          <div class="mycontain">
            <my-title></my-title>
            <div class="midbox_con">
              <card></card>
              <div class="midbox_con_rig">
                <littleCard
                  v-for="m in moviedata"
                  :key="m.score"
                  :mysrc="m.imgsrc"
                  :mysroce="m.score"
                  :myname="m.filmname"
                  :myduration="m.duration"
                  :mytype="m.cates"
                  :mycont="m.comts"
                ></littleCard>
              </div>
              <div class="midbox_con_btm">
                <div class="bottom">
                  <img src="../../img/select.png" alt />
                  <p>更多</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 预售 -->
        <div class="upcoming">
          <div class="upcoming_re">
            <div class="upcoming_title">
              <h2>即将上映 －7月12日~10月10日</h2>
            </div>
            <div class="upcoming_film">
              <div class="trans" style="left:0px">
                <upcoming
                  v-for="f in filmdata"
                  :key="f.heat"
                  :mysrc="f.imgsrc"
                  :myname="f.filmname"
                  :myheat="f.heat"
                  :mytype="f.cates"
                  :mydirector="f.director"
                  :mydate="f.rels"
                ></upcoming>
              </div>
            </div>
            <!-- 前进后退按钮 -->
            <div class="pre" @click="pre" v-if="hide">
              <img src="../../img/pre.png" />
            </div>
            <div class="next" @click="next" v-if="show">
              <img src="../../img/next.png" />
            </div>
          </div>
        </div>
        <!-- 影院 -->
        <div class="cinema">
          <!-- 标题 -->
          <cinema></cinema>
          <div class="cinema_con">
            <div class="cinema_data">
              <!-- 声明 -->
              <div class="statement">以下影城均非MovieTime自营</div>
              <!-- 详细影城数据 -->
              <div class="cineplex">
                <cineplex
                  v-for="c in cinemadata"
                  :key="c.price"
                  :mysrc="c.img"
                  :myname="c.name"
                  :mysite="c.address"
                  :myprice="c.price"
                ></cineplex>
              </div>
              <!-- 更多 -->
              <div class="midbox_con_btm">
                <div class="bottom">
                  <img src="../../img/select.png" alt />
                  <p>更多</p>
                </div>
              </div>
            </div>
            <!-- 广告 -->
            <div class="adver">
              <img src="http://ubmcmm.baidustatic.com/media/v1/0f000Q6WT-7oJNQHJSlirs.jpg" alt />
            </div>
          </div>
        </div>
        <!-- 底部广告 -->
        <div class="bom-ad">
          <img src="http://ubmcmm.baidustatic.com/media/v1/0f000n1TzQXjmGeIm1-X0f.jpg" alt />
        </div>
        <!-- 合作联系 -->
        <!-- <div class="cooperation">
          <div class="filmtipbox">
            <ul>
              <li>
                <div class="moviecard"></div>
        <div class="ticketonline"></div>-->
        <!-- </li>
              <li></li>
            </ul>
          </div>
        </div>-->
      </el-col>
    </el-row>

    <bottom-menu></bottom-menu>
  </div>
</template>
<script>
import Guide from "../components/guide.vue";
import Title from "../components/title.vue";
import Card from "../components/card.vue";
import littleCard from "../components/littleCard.vue";
import Upcoming from "../components/upcoming.vue";
import Cinema from "../components/cinema.vue";
import Cineplex from "../components/cineplex.vue";
export default {
  data: function() {
    return {
      hide: false,
      show: true,
      cinemadata: [],
      moviedata: [],
      filmdata: [],
      resl: ""
    };
  },
  components: {
    guide: Guide,
    "my-title": Title,
    card: Card,
    littleCard: littleCard,
    upcoming: Upcoming,
    cinema: Cinema,
    cineplex: Cineplex
  },
  methods: {
    pre() {
      this.show = true;
      var ts = document.getElementsByClassName("trans")[0];
      var nowts = parseInt(ts.style.left);
      if (nowts < 0) {
        ts.style.left = `${nowts + 590}px`;
      } else {
        this.hide = false;
      }
    },
    next() {
      this.hide = true;
      var ts = document.getElementsByClassName("trans")[0];
      var nowts = parseInt(ts.style.left);
      if (nowts >= -1770) {
        ts.style.left = `${nowts - 590}px`;
      } else {
        this.show = false;
      }
    },
    // fm() {
    //   console.log(666)
    // }
  },
  created() {
    // 影院数据
    this.axios
      .get("/cinema", {
        params: {
          type: 0
        }
      })
      .then(res => {
        this.cinemadata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    // 上映电影数据
    this.axios
      .get("/movie", {
        params: {
          type: 1
        }
      })
      .then(res => {
        this.moviedata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    // 即将上映电影数据
    this.axios
      .get("/film", {
        params: {
          type: 0
        }
      })
      .then(res => {
        this.filmdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
 <style lang="scss" scoped>
.midbox {
  background: #f2f2f2;
}
.mycontain {
  width: 1000px;
  margin: auto;
  min-height: 500px;
  padding: 50px 0 0;
}
.midbox_con {
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.midbox_con_rig {
  width: 680px;
  height: 539px;
  display: flex;
  flex-wrap: wrap;
}
.midbox_con_btm {
  width: 100%;
  height: 82px;
}
.bottom {
  display: flex;
  width: 70px;
  margin-left: 465px;
  margin-top: 30px;
}
.midbox_con_btm img {
  width: 31px;
  height: 31px;
  margin-right: 5px;
  opacity: 0.8;
}
.midbox_con_btm p {
  display: block;
  line-height: 31px;
}
.upcoming {
  width: 1000px;
  margin: auto;
  padding: 45px 0 30px 0;
  position: relative;
}
.upcoming_title {
  width: 1000px;
  height: 48px;
  border-left: 10px solid #ff6d00;
}
.upcoming_title h2 {
  font-size: 20px;
  font-weight: normal;
  line-height: 48px;
  padding: 0 15px;
  text-align: start;
}
.upcoming_film {
  width: 1000px;
  height: 246px;
  border: 1px solid transparent;
  padding-left: 3px;
  overflow: hidden;
  position: relative;
}
.trans {
  display: flex;
  margin-top: 30px;
  position: absolute;
  // left: 0px;
}
.next {
  width: 24px;
  height: 59px;
  position: absolute;
  top: 50%;
  left: 100%;
  background-color: #f4f4f4;
  line-height: 85px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 2px;
}
.pre {
  width: 24px;
  height: 59px;
  position: absolute;
  background-color: #f4f4f4;
  top: 50%;
  left: -3%;
  line-height: 85px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 2px;
}
.next img {
  width: 24px;
  height: 34px;
}
.pre img {
  width: 24px;
  height: 34px;
}
.pre:hover {
  background-color: #08c;
}
.next:hover {
  background-color: #08c;
}
.cinema {
  width: 1000px;
  margin: auto;
  margin-top: 40px;
}
.cinema_con {
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.adver {
  width: 300px;
  height: 250px;
  margin-top: 1em;
}
.adver img {
  width: 100%;
  height: 100%;
}
.cinema_data {
  width: 680px;
}
.statement {
  width: 100%;
  font-size: 14px;
  color: #696969;
  text-align: center;
  line-height: 32px;
  background: #eaeaea;
}
.bom-ad {
  width: 1000px;
  height: 90px;
  margin: auto;
  margin-bottom: 15px;
}
.bom-ad img {
  width: 100%;
  height: 100%;
}
.cooperation {
  width: 100%;
  height: 300px;
  padding: 1px;
  background-color: #08c;
}
.filmtipbox {
  width: 1000px;
  height: 240px;
  margin: auto;
  background-color: #e1eef4;
  margin-top: 30px;
  background: url(//static1.mtime.cn/theater/20190321133339/images/filmmovie.jpg)
    no-repeat 0 -104px;
  width: 182px;
  height: 146px;
  left: -20px;
  top: -20px;
}
.filmtipbox ul {
  list-style: none;
}
</style>

