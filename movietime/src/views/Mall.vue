<template>
  <div>
    <top-menu></top-menu>

    <!-- 搜索导航栏 -->
    <div class="guide">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="black"
      >
        <el-menu-item index="1" class="myfon1">商城首页</el-menu-item>
        <el-menu-item index="2" class="myfon1">全部产品</el-menu-item>
        <el-menu-item index="3" class="myfon1">新品</el-menu-item>
      </el-menu>
      <Sousuo></Sousuo>
    </div>

    <el-row>
      <el-col :xs="21" :sm="21" :md="21" :lg="21" :xl="21" style="margin-left:5em;overflow:hidden">
        <div class="grid-content">
          <div class="centerbox">
            <!-- 轮播图左边导航栏 -->
            <div class="leftbox">
              <div
                v-for="(a,index) in guidearr"
                :key="(a,index)"
                @mouseenter="displayblock(index)"
                @mouseleave="changecolor(index)"
              >
                <div class="guidelist">
                  <i :class="a.class1"></i>
                  <div>
                    <p style="font-weight:700">{{a.p1}}</p>
                    <p>{{a.p2}}}</p>
                  </div>
                  <i class="el-icon-arrow-right"></i>
                </div>
              </div>

              <div class="infobox" v-show="block" @mouseleave="displaynone">
                <div class="categorytip">
                  <div class="categorylist">
                    <dl>
                      <dt>分类</dt>
                      <!--分类最多只能有8个，切记-->
                      <dd v-for="myclass in mya.goods_class" :key="myclass">
                        <a href="#" target="_blank">{{myclass}}</a>
                      </dd>
                    </dl>

                    <dl>
                      <dt>品牌</dt>
                      <!--品牌最多只能有8个，切记-->
                      <dd v-for="mybrand in mya.goods_brand" :key="mybrand">
                        <a href="#" target="_blank">{{mybrand}}</a>
                      </dd>
                    </dl>
                    <a href="#" :title="mya.mytitle" class="feature" target="_blank">
                      <img :src="mya.mysrc" width="260" height="320" :alt="mya.myalt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 轮播图 -->
            <div class="rightbox">
              <el-carousel indicator-position="none" height="360px">
                <el-carousel-item v-for="item in lunboimg" :key="item" style="height:100%">
                  <img :src="item" class="img2" width="100%" height="100%" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!-- 三张图片盒子 -->
          <div class="imgbox">
            <div>
              <img src="http://img5.mtime.cn/mg/2019/04/25/144418.51235204.jpg" />
            </div>
            <div>
              <img src="http://img5.mtime.cn/mg/2019/07/08/144726.89440504.jpg" />
            </div>
            <div>
              <img src="http://img5.mtime.cn/mg/2019/04/25/144052.46472264.jpg" />
            </div>
          </div>

          <!-- 热门推荐商品展示 组件 -->
          <my-goods
            :mytitle="hotgoods.mytitle"
            :lineguide="hotgoods.mylineguide"
            :smimgdata="hotgoods.mysmimgdata"
            :bigimg="hotgoods.mybigimg"
          ></my-goods>

          <!-- 优选品牌 -->
          <div class="youxuanbox">
            <div style="font-size:30px">优选品牌</div>
            <el-divider>
              合作品牌 68 家 | 查看更多
              <i class="el-icon-right"></i>
            </el-divider>

            <div class="imgbox">
              <div class="my-opacity">
                <img src="http://img31.mtime.cn/mg/2016/05/20/151857.77676183.jpg" alt />
              </div>
              <div class="my-opacity">
                <img src="http://img5.mtime.cn/mg/2016/12/13/193813.20271942.jpg" alt />
              </div>
              <div class="my-opacity">
                <img src="http://img31.mtime.cn/mg/2016/05/20/203022.22983851.jpg" alt />
              </div>
            </div>
          </div>

          <!-- 玩具模型商品  toygoods-->
          <my-goods
            :mytitle="toygoods.mytitle"
            :lineguide="toygoods.mylineguide"
            :smimgdata="toygoods.mysmimgdata"
            :bigimg="toygoods.mybigimg"
          ></my-goods>

          <!-- 数码配件商品 digitalgoods-->
          <my-goods
            :mytitle="digitalgoods.mytitle"
            :lineguide="digitalgoods.mylineguide"
            :smimgdata="digitalgoods.mysmimgdata"
            :bigimg="digitalgoods.mybigimg"
          ></my-goods>

          <!-- 服装箱包商品  clothesgoods-->

          <my-goods
            :mytitle="clothesgoods.mytitle"
            :lineguide="clothesgoods.mylineguide"
            :smimgdata="clothesgoods.mysmimgdata"
            :bigimg="clothesgoods.mybigimg"
          ></my-goods>

          <!-- 居家生活商品  lifegoods -->

          <my-goods
            :mytitle="lifegoods.mytitle"
            :lineguide="lifegoods.mylineguide"
            :smimgdata="lifegoods.mysmimgdata"
            :bigimg="lifegoods.mybigimg"
          ></my-goods>

          <!-- 精选主题 -->
          <div class="jingxuanbox">
            <div style="font-size:30px">精选主题</div>
            <el-divider>
              新球大战 | 复仇者联盟 | 神偷奶爸 | 蜘蛛侠 | 查看更多
              <i class="el-icon-arrow-right"></i>
            </el-divider>

            <div
              class="jximgbox clear"
              style="background-image: url('http://img5.mtime.cn/mg/2019/07/03/165526.58329947.jpg')"
            >
              <div class="bcimgbox">
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2019/07/03/165932.18328130.jpg')"
                >
                  <strong>￥ 99</strong>
                </div>
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2019/07/03/170150.34640365.jpg')"
                >
                  <strong>￥ 49</strong>
                </div>
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2019/07/03/170200.39184557.jpg')"
                >
                  <strong>￥ 39</strong>
                </div>
              </div>
            </div>

            <div
              class="jximgbox clear"
              style="background-image: url('http://img5.mtime.cn/mg/2019/04/25/181312.36353315.jpg')"
            >
              <div class="bcimgbox">
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2019/04/25/181149.19549901.jpg')"
                >
                  <strong>￥ 45</strong>
                </div>
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2019/04/25/181342.71876299.jpg')"
                >
                  <strong>￥ 239</strong>
                </div>
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2019/04/25/181406.52340258.jpg')"
                >
                  <strong>￥ 49</strong>
                </div>
              </div>
            </div>

            <div
              class="jximgbox clear"
              style="background-image: url('http://img5.mtime.cn/mg/2018/08/07/152154.20104873.jpg')"
            >
              <div class="bcimgbox">
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2018/08/20/101644.41505034.jpg')"
                >
                  <strong>￥ 40</strong>
                </div>
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2018/11/26/150507.15240230.jpg')"
                >
                  <strong>￥ 129</strong>
                </div>
                <div
                  style="background-image: url('http://img5.mtime.cn/mg/2018/08/07/154243.96899805.jpg')"
                >
                  <strong>￥ 39</strong>
                </div>
              </div>
            </div>
          </div>

          <el-divider>
            <span style="font-size:25px">猜 你 喜 欢</span>
          </el-divider>

          <!-- 猜你喜欢 -->
          <div class="gsylikebox">
            <my-gsulike
              v-for="(gsu,index) in gsulikegoods"
              :key="index"
              :mysrc="gsu.img"
              :goodsname="gsu.name"
              :price="gsu.price"
              :myalt="gsu.name"
              :id="gsu.id"
            ></my-gsulike>
            <el-button type="primary" round size="medium">查看更多</el-button>
          </div>
        </div>
      </el-col>
    </el-row>

    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import goods from "../components/goods.vue";
import gsulike from "../components/guessulikegoods.vue";

export default {
  data() {
    return {
      activeIndex: "1",
      block: false,
      guidearr: [
        {
          class1: "el-icon-bicycle",
          p1: "玩具模型",
          p2: "模型公仔 仿真收藏",
          goods_class: [
            "仿真收藏",
            "模型公仔",
            "益智拼插",
            "变形金刚",
            "毛绒玩具"
          ],
          goods_brand: [
            "Hot Toys",
            "threezore",
            "WETA",
            "GSC",
            "Sideshow",
            "野兽国玩具",
            "影时光"
          ],
          mytitle: "Hot Toys专区",
          mysrc: "http://feature.mtime.com/item/2018/HPC/1210/4.jpg",
          myalt: "Hot Toys专区"
        },
        {
          class1: "el-icon-mobile-phone",
          p1: "数码配件",
          p2: "手机配件 充电装备",
          goods_class: ["手机配件", "移动电源", "时尚U盘", "车载用品"],
          goods_brand: ["影时光", "品漫会", "火柴谜题", "PGA", "Rock"],
          mytitle: "数码新品推荐",
          mysrc: "http://feature.mtime.com/item/2018/HPC/1210/2.jpg",
          myalt: "数码新品推荐"
        },
        {
          class1: "el-icon-goods",
          p1: "服装服饰",
          p2: "潮牌男装 时尚女装",
          goods_class: ["男装", "女装", "帽子", "服饰配件", "时尚包品"],
          goods_brand: [
            "影时光",
            "I.T",
            "FUN潮牌",
            "张小盒",
            "ODM",
            "迪士尼",
            "STAYREAL"
          ],
          mytitle: "潮流服饰来袭",
          mysrc: "http://feature.mtime.com/item/2018/HPC/1210/3.jpg",
          myalt: "潮流服饰来袭"
        },
        {
          class1: "el-icon-milk-tea",
          p1: "居家日用",
          p2: "抱枕靠垫 创意文具",
          goods_class: [
            "汽车配件",
            "水杯水壶",
            "创意文具",
            "抱枕靠垫",
            "毛巾浴巾",
            "家装软饰",
            "灯具"
          ],
          goods_brand: [
            "影时光",
            "膳魔师",
            "沃奇",
            "limeworks",
            "zak",
            "Hot Toys"
          ],
          mytitle: "家居好物推荐",
          mysrc: "http://feature.mtime.com/item/2018/HPC/1210/1.jpg",
          myalt: "家居好物推荐"
        }
      ],
      mya: {},
      lunboimg: [
        "http://img5.mtime.cn/mg/2019/03/04/110935.36969651.jpg",
        "http://img5.mtime.cn/mg/2019/03/07/112241.78189473.jpg",
        "http://img5.mtime.cn/mg/2019/02/25/112443.79385734.jpg",
        "http://img5.mtime.cn/mg/2018/11/23/102053.52947209.jpg"
      ],
      mycolor: "black",
      hotgoods: {
        mytitle: "热门推荐",
        mylineguide: " 新品上架 | 超前预售 | 热销爆款 | 查看更多 ",
        mybigimg: "http://img5.mtime.cn/mg/2018/10/15/140059.26969133.jpg",
        mysmimgdata: []
      },
      toygoods: {
        mytitle: "玩具模型",
        mylineguide: " 模型公仔 | 仿真收藏 | 角色扮演 | 查看更多 ",
        mybigimg: "http://img5.mtime.cn/mg/2018/12/05/103157.89291562.jpg",
        mysmimgdata: []
      },
      digitalgoods: {
        mytitle: "数码配件",
        mylineguide: " 手机配件 | 充电装备 | 时尚U盘 | 查看更多 ",
        mybigimg: "http://img5.mtime.cn/mg/2018/11/26/142206.81354454.jpg",
        mysmimgdata: []
      },
      clothesgoods: {
        mytitle: "服装箱包",
        mylineguide: " 男装 | 服饰配件 | 童装 | 查看更多 ",
        mybigimg: "http://img5.mtime.cn/mg/2019/07/03/164923.18653155.jpg",
        mysmimgdata: []
      },
      lifegoods: {
        mytitle: "居家生活",
        mylineguide: " 水杯水壶 | 创意文具 | 抱枕靠垫 | 查看更多 ",
        mybigimg: "http://img5.mtime.cn/mg/2019/04/03/152213.18199595.jpg",
        mysmimgdata: []
      },
      gsulikegoods: []
    };
  },
  methods: {
    displayblock: function(index) {
      this.block = true;
      this.mya = this.guidearr[index];
      //this.mycolor = "orange";
      document.querySelectorAll(".leftbox>div")[index].style.color = "orange";
    },
    displaynone: function() {
      this.block = false;
    },
    changecolor: function(index) {
      document.querySelectorAll(".leftbox>div")[index].style.color = "black";
    }
  },
  components: {
    "my-goods": goods,
    "my-gsulike": gsulike
  },
  created: function() {
    this.axios
      .get("http://localhost:8888/gethotgoods", {
        params: {
          goodsclass: "hot"
        }
      })
      .then(res => {
        this.hotgoods.mysmimgdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .get("http://localhost:8888/gettoymodelgoods", {
        params: {
          goodsclass: "toymodel"
        }
      })
      .then(res => {
        this.toygoods.mysmimgdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .get("http://localhost:8888/getdigitalgoods", {
        params: {
          goodsclass: "digital"
        }
      })
      .then(res => {
        this.digitalgoods.mysmimgdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .get("http://localhost:8888/getclothesgoods", {
        params: {
          goodsclass: "clothes"
        }
      })
      .then(res => {
        this.clothesgoods.mysmimgdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .get("http://localhost:8888/getlifegoods", {
        params: {
          goodsclass: "life"
        }
      })
      .then(res => {
        this.lifegoods.mysmimgdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .get("http://localhost:8888/getgsulike", {
        params: {
          goodsclass: "guessyoulike"
        }
      })
      .then(res => {
        console.log(res.data);
        this.gsulikegoods = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>



<style scoped>
.clear::after {
  clear: both;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-menu-demo {
  padding: 15px 10px;
}
.guide {
  display: flex;
  justify-content: space-around;
}
.sousuo[data-v-042c2b78] {
  margin: 26px 0;
}
.el-menu.el-menu--horizontal {
  border-bottom: 1px solid transparent;
}
.myfon1 {
  font-size: 16px;
  font-weight: 600;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.centerbox {
  width: 100%;
  height: 22.5em;
  display: flex;
  justify-content: space-between;
}
.leftbox {
  width: 19%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #f6f6f6;
}
.leftbox > div {
  flex: 1;
  border: 1px solid #e6e6e6;
}
.rightbox {
  width: 80%;
  height: 100%;
  background-color: gray;
}
.guidelist {
  height: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
}
.guidelist i {
  font-size: 30px;
}
.infobox {
  width: 38.125em;
  height: 100%;
  position: absolute;
  left: 100%;
  background: white;
  z-index: 100;
}
.categorylist dl {
  width: 110px;
  float: left;
  margin: 20px 0 0 30px;
}
.categorylist dt {
  color: #666;
  line-height: 1;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
}
.categorylist dd {
  padding: 9px 0;
  line-height: 1;
  font-size: 14px;
}
.categorylist dd a {
  color: #333;
}
.categorylist dd a:hover {
  color: #08c;
  text-decoration: none;
}
.categorylist a.feature {
  background: #f6f6f6;
  height: 318px;
  float: right;
  border-left: 1px solid #e6e6e6;
  padding: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imgbox {
  margin: 15px 0;
  width: 97%;
  height: 190px;
  display: flex;
  justify-content: space-between;
}
.imgbox > div {
  width: 31%;
}
.youxuanbox {
  margin-top: 40px;
}
.my-opacity {
  filter: alpha(Opacity=100);
  -moz-opacity: 1;
  opacity: 1;
}
.my-opacity:hover {
  filter: alpha(Opacity=70);
  -moz-opacity: 0.7;
  opacity: 0.7;
}
.jingxuanbox {
  width: 100%;
}
.jximgbox {
  width: 100%;
  background-repeat: no-repeat;
}
.bcimgbox {
  width: 53em;
  height: 15.375em;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
  margin-right: 1em;
  float: right;
}
.bcimgbox > div {
  width: 17.5em;
  height: 12.3em;
  background-repeat: no-repeat;
  position: relative;
}
.bcimgbox > div > strong {
  position: absolute;
  top: 5em;
  left: 5em;
}
.gsylikebox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
