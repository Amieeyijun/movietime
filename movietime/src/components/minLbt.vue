<template>
  <div id="lbt1">
    <!-- <div class="bigbox1"> img</div>
    <div class="bigbox2"></div>
    <div class="bigbox3"></div>
    <div class="bigbox4"></div>
    <div class="bigbox5"></div>
    <div class="bigbox6"></div>-->
    <div
      class="movie_brief_layer"
      style="top: -30px; left:-25px;"
      v-show="hide"
      @mouseleave="fm()"
      ref="hello"
    >
      <a
        class="top_poster"
        href="//video.mtime.com/75157/?mid=238037"
        target="_blank"
        data-pan="M18_Index_onShowList_poster_img_1"
      >
        <video autoplay="autoplay" muted :src="mysrc" loop="loop"></video>
      </a>
      <div class="brief_info">
        <p class="brief_title">
          <a
            href="//movie.mtime.com/238037/"
            target="_blank"
            data-pan="M18_Index_onShowList_poster_movieName_1"
          >{{inmovie.title}}</a>
          <span>{{inmovie.age}}</span>
        </p>
        <p id="p1">
          <span class="types">{{inmovie.type}}</span>
          <span class="mduration">{{inmovie.time}}</span>
        </p>
        <p class="actors">
          主演：
          <span>{{inmovie.person}}</span>
        </p>
        <p class="brief_smry ods">
          <img src="../../img/装饰用引号.png" alt />
          {{inmovie.info}}
        </p>
      </div>
      <a
        class="ticket_bar"
        target="_blank"
        href="//theater.mtime.com/China_Beijing/movie/238037"
        data-pan="M18_Index_onShowList_poster_ribbon_1"
      >
        选座购票
        <span>
          <span>{{inmovie.money}}</span>元起
        </span>
      </a>
    </div>
    <el-carousel :interval="0" indicator-position="none" class="lbt" arrow="always">
      <el-carousel-item v-for="item in imagesbox" :key="item.id" class="minlbt">
        <div
          v-for="(m,index) in movie"
          :key="(m,index)"
          class="movie"
          @mouseenter="fn(index)"
        >
          <div class="cinameimgout">
            <a
              href="http://movie.mtime.com/11550/"
              target="_blank"
              data-logdmg="onShowList__1"
              data-mvid="11550"
              class="cinameimgitem showMovieBrief"
              data-pan="M18_Index_onShowList_poster_1"
            >
              <img :src="m.src" width="170" height="256" />
              <i class="moviegrade">{{m.score}}</i>
            </a>
          </div>
          <h3>
            <a
              href="http://movie.mtime.com/11550/"
              target="_blank"
              data-pan="M18_Index_onShowList_movieName_1"
            >{{m.name}}</a>
          </h3>
          <div class="buy">
            <a href="http://theater.mtime.com/China_Beijing/movie/11550/" target="_blank">选座购票</a>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import "../css/minLbt.css";
export default {
  data: function() {
    var left = "";
    return {
      hide: false,
      inmovie: "",
      mysrc: "",
      bigbox: [
        {
          src: "./mymovie/spiderman.mp4",
          title: "蜘蛛侠：英雄远征",
          age: "(2019)",
          type: "动作 / 冒险 / 喜剧",
          time: "127分钟",
          person: "汤姆·赫兰德 / 杰克·吉伦哈尔",
          info: "蜘蛛侠劫后重生决战千里",
          money: "28"
        },
        {
          src: "./mymovie/saodu.mp4",
          title: "扫毒2天地对决",
          age: "(2019)",
          type: "动作 / 剧情 / 犯罪",
          time: "100分钟",
          person: "刘德华 / 古天乐",
          info: "刘德华古天乐因毒品反目成仇",
          money: "38"
        },
        {
          src: "./mymovie/lion.mp4",
          title: "狮子王",
          age: "(2019)",
          type: "动画 / 冒险 / 家庭",
          time: "128分钟",
          person: "唐纳德·格洛沃 / 詹姆斯·厄尔·琼斯",
          info: "全新演绎影史经典动画",
          money: "28"
        },
        {
          src: "./mymovie/tegong.mp4",
          title: "素人特工",
          age: "(2019)",
          type: "动画",
          time: "113分钟",
          person: "王大陆 / 张榕容",
          info: "米拉乔沃维奇带领四位菜鸟冒险",
          money: "38"
        },
        {
          src: "./mymovie/mingyun.mp4",
          title: "命运之夜——天之…",
          age: "(2019)",
          type: "动画 / 剧情 / 奇幻",
          time: "113分钟",
          person: "杉山纪彰 / 下屋则子",
          info: "一场赌上性命的圣杯之战",
          money: "38"
        },
        {
          src: "./mymovie/gaoda.mp4",
          title: "机动战士高达NT",
          age: "(2019)",
          type: "动画 / 剧情 / 奇幻",
          time: "89分钟",
          person: "David Moo / 丹·爱德华兹",
          info: "日本国民级动画IP",
          money: "23"
        }
      ],
      imagesbox: [
        {
          id: 0
        },
        {
          id: 1
        }
      ],
      movie: [
        {
          id: 0,
          score: "7.8",
          name: "蜘蛛侠",
          src:
            "http://img5.mtime.cn/mg/2019/05/31/163641.36482297_170X256X4.jpg"
        },
        {
          id: 1,
          score: "6.8",
          name: "扫毒2天地对决",
          src: "http://img5.mtime.cn/mg/2019/07/01/091243.35485139_170X256X4.jpg"
        },
        {
          id: 2,
          score: "7.6",
          name: "狮子王",
          src: "http://img5.mtime.cn/mg/2019/06/28/141449.40971533_170X256X4.jpg"
        },
        {
          id: 3,
          score: "5.7",
          name: "素人特工",
          src: "http://img5.mtime.cn/mg/2019/06/23/151845.34495642_170X256X4.jpg"
        },
        {
          id: 4,
          score: "7.5",
          name: "命运之夜——天之…",
          src: "http://img5.mtime.cn/mg/2019/07/09/122757.60739828_170X256X4.jpg"
        },
        {
          id: 5,
          score: "6.4",
          name: "机动战士高达NT",
          src: "http://img5.mtime.cn/mg/2019/06/04/092155.57090348_170X256X4.jpg"
        }
      ]
    };
  },
  methods: {
    fn: function(index) {
      this.hide = true;
      this.inmovie = this.bigbox[index];
      this.mysrc = this.inmovie.src;
      // console.log(this)
      // console.log(this.$refs.hello)
      this.$refs.hello.style.left = -25 + 205 * index + "px";
      // console.log(index)
      // console.log(this.inmovie)
      // console.log(this.mysrc)
    },
    fm() {
      this.hide = false;
    }
  }
};
</script>

<style>
</style>