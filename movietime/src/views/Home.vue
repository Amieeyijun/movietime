<template>
  <div class="home">
    <top-menu></top-menu>
    <div class="ssk">
      <Sousuo class="ssk1"></Sousuo>
    </div>
    <div id="lbt">
      <el-carousel :interval="4000" indicator-position="none" class="lbt" arrow="always">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <a :href="item.idHref">
            <img :src="item.idView" class="image" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="body-sonone">
      <a href="http://news.mtime.com/2019/07/09/1594805.html">
        <img src="http://ubmcmm.baidustatic.com/media/v1/0f000rTh7Nn3GzT67MGVOs.jpg" alt />
      </a>
    </div>

    <div class="body-sontwo">
      <div class="sontwo1">
        <div class="sontwo11">
          <h4>今日热点</h4>
          <div class="customnav">
            <dl>
              <dd>
                <a
                  href="http://news.mtime.com/fun/"
                  target="_blank"
                  data-pan="M18_Index_topNews_nav_1"
                >全球拾趣</a>
              </dd>
              <dd>
                <a
                  href="http://news.mtime.com/conversation/"
                  target="_blank"
                  data-pan="M18_Index_topNews_nav_2"
                >时光对话</a>
              </dd>
              <dd>
                <a
                  href="http://news.mtime.com/industry/all/index.html#nav"
                  target="_blank"
                  data-pan="M18_Index_topNews_nav_3"
                >产业聚焦</a>
              </dd>
              <dd>
                <a
                  href="http://news.mtime.com/tv/all/index.html#nav"
                  target="_blank"
                  data-pan="M18_Index_topNews_nav_4"
                >电视情报</a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="sontwo12">
          <a href="http://localhost:8080/News">
            <span>更多</span>
            <span class="el-icon-arrow-right"></span>
          </a>
        </div>
        <ul class="sontwo13">
          <li v-for="n in news" :key="n.id">
            <a :href="n.idHref">
              <img :src="n.idNews" class="image" />
            </a>
            <a
              href="http://news.mtime.com/2019/07/11/1594873.html"
              target="_blank"
              data-pan="M18_Index_topNews_title_1"
            >
              <h3>{{n.name}}</h3>
            </a>
            <p>{{n.info}}</p>
          </li>
        </ul>
      </div>
      <div class="sontwo2">
        <h4>今日推荐</h4>
        <div class="todayrecmd-wrap">
          <a class="sontwo21" href="http://movie.mtime.com/110285/">
            <img src="http://img5.mtime.cn/mg/2019/07/09/160632.87565362.jpg" alt />
            <div class="playicon">
              <img src="../../img/播放(1).png" alt />
            </div>
          </a>
          <a class="mposter" href="http://movie.mtime.com/110285/">
            <img src="http://img31.mtime.cn/mt/2014/02/23/074815.62165377_1280X720X2.jpg" alt />
          </a>
        </div>
        <div class="mcontent">
          <p class="mtitle">
            <a
              href="//movie.mtime.com/110285/"
              data-pan="M18_Index_dailyPick_title"
              target="_blank"
            >夏日大作战</a>
            <span class="mscore">8.4</span>
          </p>
          <p class="mshow-time">温情科幻动画</p>
          <p class="mainrecmd">
            <img src="../../img/装饰用引号.png" alt />
            即使痛苦难过，也要全家人一如既往地坐在一起吃饭。
          </p>
          <p class="recmder">——&nbsp;&nbsp;时光鉴片室</p>
        </div>
      </div>
    </div>

    <div class="body-sonthree">
      <div class="cinemaregion">
        <div class="head-tab">
          <h4 class="customtitle">
            <span>院线热映</span>
          </h4>
        </div>
        <dl class="cinemamenu" data-plugin="tab-nav">
          <dd class="cur">
            正在售票
            <i data-count="hot-mticket">56</i>部
          </dd>
          <dd class id="dd">
            即将上映
            <i data-count="onnext-mticket">70</i>部
          </dd>
        </dl>
        <a
          class="cmore"
          href="http://theater.mtime.com/"
          data-pan="M18_Index_onShowList_more"
          style="display: block;"
        >更多</a>
        <a
          class="cmore"
          style="display: none;"
          href="http://movie.mtime.com/comingsoon/#comingsoon"
          data-pan="M18_Index_futureSchdule_more"
        >更多</a>
      </div>
    </div>
    <min-lbt></min-lbt>

    <div class="body-sonthree">
      <div class="cinemaregion">
        <div class="head-tab">
          <h4 class="customtitle">
            <span>全网在线甄选</span>
          </h4>
        </div>
        <dl class="cinemamenu" data-plugin="tab-nav">
          <dd class="cur">近期热门</dd>
          <dd class id="dd">最新上线</dd>
        </dl>
        <a
          class="cmore"
          href="http://theater.mtime.com/"
          data-pan="M18_Index_onShowList_more"
          style="display: block;"
        >更多</a>
      </div>
    </div>
    <min-lbt></min-lbt>

    <div class="body-sonfour">
      <div class="body-sontwo">
        <div class="sontwo1">
          <div class="sonfour11">
            <h4 style="color:#fff;">新片预告</h4>
          </div>
          <div class="sontwo16">
            <a href="http://video.mtime.com/search">
              <span>更多</span>
              <span class="el-icon-arrow-right"></span>
            </a>
          </div>
          <div class="sonfour13">
            <div class="sonfour131">
              <a href="http://news.mtime.com/2019/07/12/1594913.html">
                <img src="http://img5.mtime.cn/mg/2019/07/12/114840.56559734.jpg" alt />
                <div class="bf">
                  <img src="../../img/播放(1).png" alt />
                </div>
              </a>
              <a href="http://news.mtime.com/2019/07/12/1594913.html">
                <h3>国产科幻《上海堡垒》“战争特辑”</h3>
              </a>
              <p>2019.8.9中国 上映</p>
            </div>
            <div class="sonfour132">
              <div v-for=" v in mymovie1" :key="v.id">
                <a :href="v.myHref">
                  <img :src="v.mysrc" alt />
                  <div class="playicon">
                    <img src="../../img/播放(1).png" alt />
                  </div>
                  <span>
                    <strong>{{v.mystrong}}</strong>
                    <b>{{v.myb}}</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="sonfour2">
          <h4 style="color:#fff;">最受期待新片</h4>
          <div class="reping">
            <img src="http://img5.mtime.cn/mg/2019/06/28/175055.90047347.jpg" alt />
            <dl>
              <dt class="clear">
                <span>影片名</span>
                <span>时光热度排名</span>
              </dt>
              <dd class="odd" data-guide-mid="237095">
                <span class="moviename">
                  <a
                    href="http://movie.mtime.com/237095/"
                    target="_blank"
                    data-pan="M18_Index_bestMovie_title_1"
                  >狮子王</a>
                </span>
                <span class="movierank">01 &nbsp;-</span>
                <span class="moviectrl">
                  <a
                    href="http://theater.mtime.com/China_Beijing/movie/237095"
                    class="yushou"
                    data-pan="M18_Index_bestMovie_like_On_1"
                    target="_blank"
                  >预售</a>
                </span>
              </dd>
              <dd class="odd" id="add" data-guide-mid="237095">
                <span class="moviename">
                  <a
                    href="http://movie.mtime.com/260270/"
                    target="_blank"
                    data-pan="M18_Index_bestMovie_title_1"
                  >银河补习班</a>
                </span>
                <span class="movierank">02 &nbsp;-</span>
                <span class="moviectrl">
                  <a
                    href="http://theater.mtime.com/China_Beijing/movie/260270"
                    class="yushou"
                    data-pan="M18_Index_bestMovie_like_On_1"
                    target="_blank"
                  >预售</a>
                </span>
              </dd>
              <dd class="odd" data-guide-mid="237095">
                <span class="moviename">
                  <a
                    href="http://movie.mtime.com/237095/"
                    target="_blank"
                    data-pan="M18_Index_bestMovie_title_1"
                  >素人特工</a>
                </span>
                <span class="movierank">03 &nbsp;-</span>
                <span class="moviectrl">
                  <a
                    href="http://theater.mtime.com/China_Beijing/movie/237095"
                    class="yushou"
                    data-pan="M18_Index_bestMovie_like_On_1"
                    target="_blank"
                  >预售</a>
                </span>
              </dd>
              <dd class id="add" data-guide-mid="237095">
                <span class="moviename">
                  <a
                    href="http://movie.mtime.com/260270/"
                    target="_blank"
                    data-pan="M18_Index_bestMovie_title_1"
                  >花木兰</a>
                </span>
                <span class="movierank">
                  &nbsp;04
                  <p class="el-icon-sort-up" style="color:#1e7dd7"></p>
                </span>
                <span class="moviectrl">
                  <a
                    href="http://theater.mtime.com/China_Beijing/movie/260270"
                    class="wantsee"
                    target="_blank"
                  >想看</a>
                </span>
              </dd>
              <dt>
                <a href="http://movie.mtime.com/comingsoon/#comingsoon" class="cmore1">更多</a>
              </dt>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="body-sonfive">
      <div class="body-sontwo">
        <div class="sontwo1">
          <div class="sonfour11">
            <h4 style="color:#000;">热门影评</h4>
          </div>
          <div class="sontwo16">
            <a href="http://www.mtime.com/community/">
              <span>更多</span>
              <span class="el-icon-arrow-right"></span>
            </a>
          </div>
          <div class="sonfour13">
            <pllpt></pllpt>
            <div class="sonfour132">
              <div v-for=" p in pinglun" :key="p.id" class="four132">
                <a :href="p.myhref1">
                  <img :src="p.mysrc" alt />
                </a>
                <a :href="p.myhref">
                  <i class="el-icon-edit"></i>
                  {{p.body}}
                </a>
                <p class="describemovie">
                  <a :href="p.ptou" target="_blank">{{p.person}}</a> 评 《
                  <a :href="p.href1" target="_blank">{{p.movie}}</a>》
                  <i class="moviegrade">{{p.i}}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="sonfour2">
          <h4 style="color:#000;">社区活动</h4>
          <div class="reping">
            <i class="i">有奖活动</i>
            <img src="http://img5.mtime.cn/mg/2019/07/04/111031.77920293.jpg" alt />
            <h3 class="title">晒《狮子王》珍藏赢限量电影周边</h3>
            <p>
              <i class="el-icon-timer"></i> 07月04日 11:00
            </p>
            <p class="p">伴随《狮子王》动画长大的一代人（就是你我）快来晒出你的所有珍藏吧！如玩具、游戏、光碟、海报等！</p>
            <a href="http://group.mtime.com/13539/event/47263/">
              <p class="div1">我参加</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="body-sonsix">
      <div class="body-sonthree">
        <div class="cinemaregion">
          <div class="head-tab">
            <h4 class="customtitle">
              <span>好片连连看</span>
            </h4>
          </div>
          <a
            class="cmore"
            href="http://movie.mtime.com/all/list/"
            data-pan="M18_Index_onShowList_more"
            style="display: block;"
          >更多</a>
        </div>
      </div>
      <ul class="srl-list">
        <li>
          <a
            href="http://movie.mtime.com/list/1720.html"
            target="_blank"
            data-pan="M18_Index_movieList_poster_1"
            title="上半年高分韩国电影推荐"
          >
            <img
              src="http://img5.mtime.cn/mg/2019/07/12/114106.12169693.jpg"
              width="590"
              height="340"
              alt="上半年高分韩国电影推荐"
            />
            <h3>
              <span>15</span>&nbsp;部&nbsp;&nbsp;&nbsp;上半年高分韩国电影推荐
            </h3>
          </a>
        </li>
        <li>
          <a
            href="http://movie.mtime.com/list/1708.html"
            target="_blank"
            data-pan="M18_Index_movieList_poster_2"
            title="高分古装武侠片"
          >
            <img
              src="http://img5.mtime.cn/mg/2019/07/08/181912.79725075.jpg"
              width="280"
              height="160"
              alt="高分古装武侠片"
            />
            <h3>
              <span>100</span>&nbsp;部&nbsp;&nbsp;&nbsp;高分古装武侠片
            </h3>
          </a>
        </li>
        <li>
          <a
            href="http://movie.mtime.com/list/1709.html"
            target="_blank"
            data-pan="M18_Index_movieList_poster_3"
            title="高分日本动画"
          >
            <img
              src="http://img5.mtime.cn/mg/2019/06/25/150913.13963629.jpg"
              width="280"
              height="160"
              alt="高分日本动画"
            />
            <h3>
              <span>100</span>&nbsp;部&nbsp;&nbsp;&nbsp;高分日本动画
            </h3>
          </a>
        </li>
        <li>
          <a
            href="http://movie.mtime.com/list/1706.html"
            target="_blank"
            data-pan="M18_Index_movieList_poster_4"
            title="诺兰最喜欢的电影"
          >
            <img
              src="http://img5.mtime.cn/mg/2019/06/20/171550.28722141.jpg"
              width="280"
              height="160"
              alt="诺兰最喜欢的电影"
            />
            <h3>
              <span>30</span>&nbsp;部&nbsp;&nbsp;&nbsp;诺兰最喜欢的电影
            </h3>
          </a>
        </li>
        <li>
          <a
            href="http://movie.mtime.com/list/1689.html"
            target="_blank"
            data-pan="M18_Index_movieList_poster_5"
            title="热血竞技电影"
          >
            <img
              src="http://img5.mtime.cn/mg/2019/06/20/171810.26354999.jpg"
              width="280"
              height="160"
              alt="热血竞技电影"
            />
            <h3>
              <span>100</span>&nbsp;部&nbsp;&nbsp;&nbsp;热血竞技电影
            </h3>
          </a>
        </li>
      </ul>
    </div>

    <div class="body-sonseven">
      <div class="seven-son">
        <div class="sontwo1">
          <div class="sontwo11">
            <h4>电影周边</h4>
            <div class="customnav">
              <dl>
                <dd>
                  <a
                    href="http://list.mall.mtime.com/?c1=25"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_1"
                  >玩具模型</a>
                </dd>
                <dd>
                  <a
                    href="http://list.mall.mtime.com/?c1=8"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_2"
                  >数码配件</a>
                </dd>
                <dd>
                  <a
                    href="http://list.mall.mtime.com/?c1=42"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_3"
                  >服装服饰</a>
                </dd>
                <dd>
                  <a
                    href="http://list.mall.mtime.com/?c1=43"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_4"
                  >居家日用</a>
                </dd>
              </dl>
            </div>
          </div>
          <div class="sontwo12">
            <a href="http://localhost:8080/Mall">
              <span>更多</span>
              <span class="el-icon-arrow-right"></span>
            </a>
          </div>
          <div class="sevenson1">
            <div>
              <a
                href="http://feature.mtime.com/item/2019/newphonecase/?pc_mall_banner_newphonecase"
              >
                <img src="http://img5.mtime.cn/mg/2019/03/20/180942.62843204.jpg" alt />
              </a>
            </div>
            <div>
              <a href="http://item.mall.mtime.com/106736">
                <img src="http://img5.mtime.cn/mg/2018/07/13/180701.76479052.jpg" alt />
              </a>
              <span class="price1">¥ 259</span>
            </div>
            <div>
              <a href="http://item.mall.mtime.com/107071/"><img src="http://img5.mtime.cn/mg/2018/07/13/180743.16896315.jpg" alt /></a>
              
              <span class="price1">¥ 109</span>
            </div>
            <div>
              <a href="http://feature.mtime.com/item/2019/creativegoods/?pc_mall_banner_creativegoods"><img src="http://img5.mtime.cn/mg/2019/03/20/181249.34652800.jpg" alt /></a>
              
            </div>
            <div>
              <a href="http://feature.mtime.com/item/2019/newphonecase/?pc_mall_banner_newphonecase">
                <img src="http://img5.mtime.cn/mg/2019/03/20/181033.39128576.jpg" alt />
              </a>
              
            </div>
            <div>
              <a href="http://item.mall.mtime.com/107127/">
                <img src="http://img5.mtime.cn/mg/2018/07/13/180859.80176323.jpg" alt />
              </a>
              
              <span class="price1">¥ 129</span>
            </div>
            <div>
              <a href="http://item.mall.mtime.com/107042/"><img src="http://img5.mtime.cn/mg/2019/04/03/152727.61986604.jpg" alt /></a>
              
              <span class="price1">¥ 69</span>
            </div>
            <div>
              <a href="http://feature.mtime.com/item/2018/Bduck/"><img src="http://img5.mtime.cn/mg/2019/03/20/181731.11572032.jpg" alt /></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body-soneight">
      <div class="soneight">
        <div class="sontwo1">
          <div class="sontwo11">
            <h4>发现更多</h4>
            <div class="customnav">
              <dl>
                <dd>
                  <a
                    href="http://www.mtime.com/top/movie/top100/"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_1"
                  >时光TOP100</a>
                </dd>
                <dd>
                  <a
                    href="http://movie.mtime.com/comingsoon/"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_2"
                  >最受期待新片</a>
                </dd>
                <dd>
                  <a
                    href="http://award.mtime.com/all/"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_3"
                  >获奖佳片</a>
                </dd>
                <dd>
                  <a
                    href="http://www.mtime.com/review/column/"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_4"
                  >特约影评</a>
                </dd>
                <dd>
                  <a
                    href="http://my.mtime.com/app/card/"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_4"
                  >卡片大富翁</a>
                </dd>
                <dd>
                  <a
                    href="http://my.mtime.com/app/quiz/"
                    target="_blank"
                    data-pan="M18_Index_topNews_nav_4"
                  >电影猜猜猜</a>
                </dd>
              </dl>
            </div>
          </div>
          <div class="sontwo12">
            <a href="http://localhost:8080/News">
              <span>更多</span>
              <span class="el-icon-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="eightall">
        <div v-for="x in xnews" :key="x.id" class="xnews">
          <a href="#">
            <img :src="x.img" alt />
          </a>
          <a href="#">
            <h3 :title="x.name">{{x.name}}</h3>
          </a>
          <a href="#">
            <p>{{x.info}}</p>
          </a>
        </div>
      </div>

      <a href="/News">
        <div class="buttonall">查看更多</div>
      </a>
    </div>

    <img
      src="http://ubmcmm.baidustatic.com/media/v1/0f000KOnAcTFYtTtZQieOs.jpg"
      alt
      width="1200px"
      height="90px"
    />
    <hr style="margin-top:20px" />
    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import plLpt from "../components/plLbt";
import "../css/Home.css";
export default {
  data: function() {
    return {
      xnews: [],
      pinglun: [
        {
          id: 0,
          body:
            "难见传承，人设空洞苍白，《机动战士高达NT》已不再是世人眼中代表自由与正义的高达，而只是一个不伦不类的神棍。",
          myhref: "http://i.mtime.com/8117867/blog/8193916/",
          myhref1: "http://movie.mtime.com/260942/",
          mysrc:
            "http://img5.mtime.cn/mt/2019/06/04/092153.63433521_80X120X4.jpg",
          person: "梦里诗书",
          ptou: "http://my.mtime.com/8117867",
          movie: "机动战士高达N…",
          i: "4.0"
        },
        {
          id: 1,
          body:
            "与其说讲述了父子之间不可避免对立矛盾面，不如说是儿子无法理解父亲的人生视角，直到他做了父亲，方知道其中道理",
          myhref: "http://i.mtime.com/170928855/blog/8193918/",
          myhref1: "http://movie.mtime.com/10429/",
          mysrc:
            "http://img31.mtime.cn/mt/2013/11/27/102640.36705068_80X120X4.jpg",
          person: "江湖司马",
          ptou: "http://my.mtime.com/170928855",
          movie: "大鱼",
          i: "5.5"
        },
        {
          id: 2,
          body:
            "影片最后处理方式重回B级片路线，一群人打来打去好不热闹。观众们得到了简单粗暴的结果，却也失去了遐想空间。",
          myhref: "http://i.mtime.com/miaojiezi/blog/8193977/",
          myhref1: "http://movie.mtime.com/257670/",
          mysrc:
            "http://img5.mtime.cn/mt/2018/10/10/112630.17867759_80X120X4.jpg",
          person: "妙介子",
          ptou: "http://my.mtime.com/841339",
          movie: "宠物坟场",
          i: "10"
        }
      ],
      mymovie1: [
        {
          id: 0,
          mysrc: "http://img5.mtime.cn/mg/2019/07/11/102358.68139683.jpg",
          myHref: "http://news.mtime.com/2019/07/10/1594848.html",
          mystrong: "《星际探索》新预告",
          myb: "2019.9.20美国 上映"
        },
        {
          id: 1,
          mysrc: "http://img5.mtime.cn/mg/2019/07/11/102505.65075734.jpg",
          myHref: "http://news.mtime.com/2019/07/11/1594866.html",
          mystrong: "《好莱坞往事》电视预告",
          myb: "2019.7.26美国 上映"
        },
        {
          id: 2,
          mysrc: "http://img5.mtime.cn/mg/2019/07/09/231506.41835452.jpg",
          myHref: "http://news.mtime.com/2019/07/09/1594824.html",
          mystrong: "《老千3》首支预告",
          myb: "2019.9韩国 上映"
        }
      ],
      imagesbox: [
        {
          id: 0,
          idView: require("../../img/1.jpg"),
          idHref: "http://movie.mtime.com/list/1708.html"
        },
        {
          id: 1,
          idView: require("../../img/2.jpg"),
          idHref: "http://news.mtime.com/2019/07/08/1594755.html"
        },
        {
          id: 2,
          idView: require("../../img/3.jpg"),
          idHref: "http://news.mtime.com/2019/07/07/1594724.html"
        },
        {
          id: 3,
          idView: require("../../img/4.jpg"),
          idHref: "http://news.mtime.com/2019/07/03/1594615.html"
        },
        {
          id: 4,
          idView: require("../../img/5.jpg"),
          idHref: "http://news.mtime.com/2019/07/04/1594671.html"
        }
      ],
      news: [
        {
          id: 0,
          idNews:
            "http://img5.mtime.cn/mg/2019/07/12/180456.12506843_285X160X4.jpg",
          idHref: "http://news.mtime.com/2019/07/11/1594905.html",
          name: "《狮子王》'片场'探班电影人变玩家",
          info: "整天在虚拟世界玩游戏，就拍出一部电影来"
        },
        {
          id: 1,
          idNews:
            "http://img5.mtime.cn/mg/2019/07/12/160735.46372023_285X160X4.jpg",
          idHref: "http://news.mtime.com/2019/07/12/1594930.html",
          name: "《长安十二时辰》：用科技点亮长安",
          info: "马亲王杜撰三项'黑科技' 管理唐朝大都会"
        },
        {
          id: 2,
          idNews:
            "http://img5.mtime.cn/mg/2019/07/12/172304.65921772_285X160X4.jpg",
          idHref: "http://news.mtime.com/2019/07/12/1594941.htmll",
          name: "“小11”否认加盟漫威《永恒族》",
          info: "凯文费奇澄清谣言 《上气》未接触甄子丹"
        },
        {
          id: 3,
          idNews:
            "http://img5.mtime.cn/mg/2019/07/12/092551.65267557_285X160X4.jpg",
          idHref: "http://news.mtime.com/2019/07/12/1594911.html",
          name: "啥？《狮子王》烂番茄解禁竟然'烂'了",
          info: "技术成就无可非议 但为啥动物能讲话？"
        },
        {
          id: 4,
          idNews:
            "http://img5.mtime.cn/mg/2019/07/12/164449.96259622_285X160X4.jpg",
          idHref: "http://news.mtime.com/2019/07/12/1594946.html",
          name: "《好莱坞往事》LA宣传皮特开心到飞起",
          info: "罗比白裙尽显女神范儿 昆汀小李从容亮相"
        },
        {
          id: 5,
          idNews:
            "http://img5.mtime.cn/mg/2019/07/12/150025.35066121_285X160X4.jpg",
          idHref: "http://news.mtime.com/2019/07/12/1594936.html",
          name: "美人如画！刘亦菲度假风新写真曝光",
          info: "悠闲坐敞篷老爷车 颜值气质依然能打"
        }
      ]
    };
  },
  methods: {},
  components: {
    pllpt: plLpt
  },
  created: function() {
    this.axios
      .get("/getNews", {
        params: {
          news: "news"
        }
      })
      .then(res => {
        console.log(res.data);
        this.xnews = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style>
</style>

