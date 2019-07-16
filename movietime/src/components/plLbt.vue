<template>
  <div class="boxpl">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="i in imageboxall" :key="i.id">
        <a :href="i.idHref">
          <img :src="i.idView" class="image" />
        </a>

        <div class="boxpl-pl">
          <img :src="i.idTou" alt class="boxpl-tou" />
          <div class="boxpl-person">
            <a :href="i.idPhref">{{i.idPerson}}</a>
          </div>
          <a href>
            <h3 class="boxpl-title">{{i.idTitle}}</h3>
          </a>
          <p align="left"><i class="el-icon-edit"></i>{{i.idBody}}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      imageboxall: [
        {
          id: 0,
          idView: "http://img5.mtime.cn/mg/2019/07/12/101157.68752962.jpg",
          idHref: "http://i.mtime.com/kenshin/blog/8193885/",
          idTou:
            "http://img32.mtime.cn/up/2013/03/31/160424.15544721_64X64.jpg",
          idPerson: "阿獠2012评《扫毒2天地对决》",
          idPhref: "http://my.mtime.com/7548286",
          idTitle:"戏里戏外的“天地”对决",
          idBody:"最大的看点是两位香港影坛两位劳模之间的对决。他们一直在竞争，也一直在为香港影人树立一种榜样，一种名为“勤奋”的可贵品质。"
        },
        {
          id: 1,
          idView: "http://img5.mtime.cn/mg/2019/07/11/101000.33558970.jpg",
          idHref: "http://i.mtime.com/801852/blog/8193857/",
          idTou: "http://img5.mtime.cn/up/2017/06/01/132921.94508797_64X64.jpg",
          idPerson: "卡斯蒂亚公爵评三块广告牌》",
          idPhref: "http://my.mtime.com/801852",
          idTitle:"愤怒只会招致更大的愤怒",
          idBody:"究竟是什么导致了暴力？以暴制暴是否是解决问题的唯一方式？私人惩恶是否具有合法性？愤怒和暴力也可能反噬自身，带来悔恨与伤害"
        },
        {
          id: 2,
          idView: "http://img5.mtime.cn/mg/2019/07/10/104601.84504417.jpg",
          idHref: "http://i.mtime.com/miaojiezi/blog/8193815/",
          idTou:
            "http://img2.mtime.cn/u/1339/841339/5264bcff-4e44-4ad0-9f4b-139db2dc93f0/128X128.jpg",
          idPerson: "妙介子评《哥谭》",
          idPhref: "http://my.mtime.com/841339",
          idTitle:"人才辈出阿卡姆",
          idBody:"哥谭市是一个超黑的大染缸，任何在大染缸里生活过的人，都会镀上一层黑色。纵使像戈登也被迫为了寻求更大的正义而做了小恶事。"
        }
      ]
    };
  }
};
</script>

<style >
.boxpl {
  width: 450px;
  height: 480px;
  position: relative;
}

.boxpl .el-carousel__container {
  height: 480px;
}
.boxpl .el-carousel__indicators--horizontal {
  top: 43%;
  left: 88%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.boxpl .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.boxpl .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.boxpl .el-carousel__button {
  display: block;
  opacity: 0.48;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 5px;
}
.boxpl .boxpl-pl {
  width: 100%;
  height: 254px;
  background-color: white;
  position: absolute;
  top: 240px;
  left: 0;
}
.boxpl .el-carousel__arrow--left {
  left: 0px;
  top: 25%;
  width: 32px;
  height: 68px;
  border-radius: 0px;
}
.boxpl .el-carousel__arrow--right {
  width: 32px;
  height: 68px;
  top: 25%;
  right: 0px;
  border-radius: 0px;
}
.boxpl .el-carousel__arrow i {
  cursor: pointer;
  font-size: 40px;
}
.boxpl-pl .boxpl-tou {
  position: absolute;
  left: 10px;
  top: -35px;
  border: 3px solid #fff;
  border-radius: 50%;
}
.boxpl-pl .boxpl-person {
  width: 313px;
  height: 22.5px;
  position: absolute;
  left: 75px;
  top: 10px;
}
.boxpl-pl .boxpl-person a {
  color: #888;
}
.boxpl-pl img {
  width: 64px;
  height: 64px;
}
.boxpl-pl .boxpl-title {
  font-weight: 400;
  text-align: center;
  font-size: 22px;
  padding: 30px 0 20px;
  position: absolute;
  left: 125px;
  top: 30px;
}
.boxpl-pl p{
    font-size: 16px;
    line-height: 1.7;
    position: absolute;
    top: 100px;
    left: 20px;
    
}
.boxpl-pl p i{
    /* background: url("../../img/装饰用引号.png") no-repeat; */
    width: 30px;
    height: 21px;
    margin-right: -10px;
    top: -5px;
    display: inline-block;
    vertical-align: baseline;
}
</style>
