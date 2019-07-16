<template>
  <div>
    <top-menu></top-menu>
    <div style="display:flex;justify-content:space-between;">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="black"
      >
        <el-menu-item index="1" style="font-size: 16px;font-weight: 600;margin-left:7em">全部商品</el-menu-item>
        <el-menu-item index="2" style="font-size: 16px;font-weight: 600;">新品</el-menu-item>
      </el-menu>
      <Sousuo style="margin:10px 100px;"></Sousuo>
    </div>

    <div style="width:100%;background:#F2F2F2;">
      <el-row>
        <el-col
          :xs="16"
          :sm="16"
          :md="16"
          :lg="16"
          :xl="16"
          style="margin-left:13em;overflow:hidden"
        >
          <div class="grid-content">
            <div class="centerbox clear">
              <div class="magnify">
                <div class="preview-box" @mousemove="move($event)" @mouseout="out" ref="previewBox">
                  <img width="100%" :src="this.imgdata.img" alt />
                  <div class="hover-box" ref="hoverBox"></div>
                </div>
                <div class="zoom-box" v-show="zoomVisiable" ref="zoomBox">
                  <img :src="this.imgdata.bigimg" alt ref="bigImg" />
                </div>
              </div>
              <div class="infobox">
                <h2>{{this.imgdata.name}}</h2>
                <div class="pricebox">
                  <p>
                    时光价:
                    <span
                      style="font-size:30px;font-weight:700;color:#DF4949"
                    >{{this.imgdata.price}}</span>
                  </p>
                  <p>服务 满99元免收运费</p>
                </div>
                <div style=" display: flex;justify-content: center; margin-top: 1em;">
                  <div>机型</div>
                  <div class="jxbox">iphone X</div>
                </div>

                <el-row class="btnbox">
                  <el-button type="danger" round>立即购买</el-button>
                  <el-button round>
                    <i class="el-icon-shopping-cart-2"></i>加入购物车
                  </el-button>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
function offset(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return {
    left: left,
    top: top
  };
}
export default {
  data: function() {
    return {
      imgdata: {},
      zoomVisiable: false,
      hoverVisiable: false,
      activeIndex: "1"
    };
  },
  created: function() {
    const goodsid = this.$route.query.id;
    this.axios
      .get("http://localhost:8888/getdetail", {
        params: {
          searchid: goodsid
        }
      })
      .then(res => {
        this.imgdata = res.data[0];
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    out() {
      this.zoomVisiable = false;
    },
    move(ev) {
      this.init();
      // 鼠标距离屏幕距离
      let moveX = ev.clientX;
      let moveY = ev.clientY;
      // 大盒子距离顶部的距离
      let offsetLeft = offset(this.oPreviewBox).left;

      let offsetTop = offset(this.oPreviewBox).top;
      let left = moveX - offsetLeft - this.houverWidth / 2;
      let top;
      if (this.scroll > 0) {
        top = moveY - offsetTop + this.scroll - this.houverHeight / 2;
      } else {
        top = moveY - offsetTop - this.houverHeight / 2;
      }
      let maxWidth = this.pWidth - this.houverWidth;
      let maxHeight = this.pWidth - this.houverHeight;
      left = left < 0 ? 0 : left > maxWidth ? maxWidth : left;
      top = top < 0 ? 0 : top > maxHeight ? maxHeight : top;
      let percentX = left / maxWidth;
      let percentY = top / maxHeight;
      this.oHoverBox.style.left = left + "px";
      this.oHoverBox.style.top = top + "px";
      this.oBigImg.style.left = percentX * (this.bWidth - this.imgWidth) + "px";
      this.oBigImg.style.top =
        percentY * (this.bHeight - this.imgHeight) + "px";
      this.$emit("move", ev);
      this.zoomVisiable = true;
    },
    init() {
      this.oHoverBox = this.$refs.hoverBox;
      this.oPreviewBox = this.$refs.previewBox;
      this.oBigImg = this.$refs.bigImg;
      this.imgBox = this.$refs.zoomBox;
      this.houverWidth = this.oHoverBox.offsetWidth;
      this.houverHeight = this.oHoverBox.offsetHeight;
      this.pWidth = this.oPreviewBox.offsetWidth;
      this.pHeight = this.oPreviewBox.offsetHeight;
      this.imgWidth = this.oBigImg.offsetWidth;
      this.imgHeight = this.oBigImg.offsetHeight;
      this.bWidth = this.imgBox.offsetWidth;
      this.bHeight = this.imgBox.offsetHeight;
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
};
</script>

<style lang="scss" scoped>
.magnify {
  margin-bottom: 7.5em;
  position: relative;
  .preview-box {
    width: 15em;
    height: 15em;
    border: 1px solid #dededd;
    position: relative;
    &:hover .hover-box {
      display: block;
    }
    .hover-box {
      position: absolute;
      display: none;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      border: 1px solid #545454;
      background: url("https://img-tmdetail.alicdn.com/tps/i4/T12pdtXaldXXXXXXXX-2-2.png")
        repeat 0 0;
      cursor: move;
      user-select: none;
    }
  }
  .zoom-box {
    width: 22.5em;
    height: 22.5em;
    overflow: hidden;
    position: absolute;
    left: 15.125em;
    border: 1px solid #c4c3c3;
    top: -4em;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
<style scoped>
.clear::after {
  clear: both;
}
.centerbox {
  width: 100%;
  margin-top: 3em;
}
h2 {
  margin-top: 2em;
}
.infobox {
  width: 50%;
  float: right;
  height: 100%;
  box-sizing: border-box;
}
.magnify {
  float: left;
  left: 7em;
  top: 4em;
}
.pricebox {
  width: 90%;
  height: 8em;
  margin-top: 1em;
  background: #f6f6f6;
  line-height: 4em;
}
.jxbox {
  border: 1px solid #df4949;
  margin-left: 3em;
}
.zoom-box {
  z-index: 100;
}
.btnbox {
  margin-top: 1em;
}
.btnbox > button {
  font-size: 20px;
  width: 10em;
}
</style>


