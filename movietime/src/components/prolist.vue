<template>
  <div class="content">
    <div class="cart_conter">
      <!-- 商品字段 -->
      <div class="cart_prolist">
        <ul>
          <li>
            <input type="checkbox" name="selectall" @click="fm" />
            全选
          </li>
          <li>商品信息</li>
          <li>单价</li>
          <li>优惠</li>
          <li>数量</li>
          <li>小计</li>
          <li>操作</li>
        </ul>
      </div>
      <!-- 具体的商品信息 -->
      <div class="cart_shangping" v-for="(item,index) in goodsData" :key="(item,index)">
        <div class="details">
          <ul>
            <li>
              <div class="details_mes">
                <input type="checkbox" id="selectall" />
                <img :src="item.img" />
                <div class="details_mes_name">
                  <p>自营</p>
                  {{item.name}}
                </div>
              </div>
            </li>
            <!-- 价格 -->
            <li>{{item.price}}</li>
            <!-- 优惠 -->
            <li></li>
            <!-- 数量 -->
            <li>
              <div class="mount">
                <p @click="reduce(index)">-</p>
                <input type="text" class="reduce" :value="item.num" />
                <p @click="increase(index)">+</p>
              </div>
            </li>
            <!-- 小计 -->
            <li>￥{{(item.num)*(Number(item.price.substr(1)))}}</li>
            <!-- 操作 -->
            <li>
              <a href="#">收藏</a>
              <a href="#" @click="delpro(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 结算栏 -->
      <div class="cart_settlement">
        <ul>
          <li>
            <input type="checkbox" name="settlement" />
            全选
          </li>
          <li>删除</li>
          <li>收藏</li>
        </ul>
        <div class="settlement_btn">
          <span>共{{this.$store.state.shopcar}}件商品，商品总价(不含运费):{{this.tprice}}</span>

          <!-- <div>
            <a href="#">去结算</a>
          </div>-->
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
  props: ["goodsData"],
  methods: {
    // 减少函数
    reduce(ind) {
      var inpval = document.getElementsByClassName("reduce")[ind];
      if (inpval.value <= 1) {
        alert("主人，我真的不能没有你");
      } else {
        inpval.value--;
      }
    },
    // 增加函数
    increase(ind) {
      var inpval = document.getElementsByClassName("reduce")[ind];
      inpval.value++;
    },
    // 全选操作
    fm() {
      var inp = document.getElementsByTagName("input");
      if (inp[0].checked) {
        for (let i = 1; i < inp.length; i++) {
          console.log(inp[i]);
          inp[i].checked = true;
        }
      } else {
        for (let i = 1; i < inp.length; i++) {
          inp[i].checked = false;
        }
      }
    },
    //删除商品
    delpro(gid) {
      this.$store.commit("delPro", gid);
    }
  },
  computed: {
    tprice: function() {
      return this.$store.getters.totalprice;
    }
  },
  // 数据挂载
  created() {}
};
</script>
<style scoped>
.content {
  width: 100%;
}
.cart_conter {
  width: 1000px;
  margin: auto;
  font-size: 14px;
}
.cart_prolist {
  width: 1000px;
  height: 63px;
  border-bottom: 2px solid #eaeaea;
  line-height: 5.5em;
  padding: 0px 2em 0 1em;
  box-sizing: border-box;
}
.cart_prolist ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.cart_prolist li {
  font-size: 14px;
  color: #999;
}
.cart_settlement {
  border-bottom: 0;
  padding: 20px 0 90px;
  display: flex;
  justify-content: space-between;
}
.cart_settlement ul {
  width: 188px;
  height: 36px;
  padding-top: 16px;
  list-style: none;
  display: flex;
}
.cart_settlement li {
  color: #333;
  margin-right: 15px;
  font-size: 14px;
}
.cart_settlement li:nth-of-type(1) {
  margin-left: 15px;
}
.cart_settlement li input {
  margin-left: 15px;
}
.settlement_btn {
  width: 462px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  line-height: 52px;
}
.settlement_btn span {
  font-size: 16px;
  display: inline-block;
}
/* .settlement_btn div {
  background: #dd4a4d;
  width: 150px;
  height: 44px;
  border: 1px solid #dd4a4d;
  font-size: 20px;
  line-height: 48px;
  text-align: center;
  overflow: hidden;
  border-radius: 3px;
  margin-right: 15px;
} */
/* .settlement_btn a {
  color: white;
} */
.details {
  width: 1000px;
  height: 160px;
  margin: auto;
  padding: 1px;
  border-bottom: 2px solid #eaeaea;
}

.details ul {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  margin-top: 30px;
}
.details li {
  line-height: 100px;
}
.details li:nth-of-type(4) {
  width: 130px;
}
.details li:nth-of-type(3) {
  width: 140px;
}
.details li:nth-of-type(2) {
  width: 140px;
  text-align: start;
  font-size: 16px;
}
.details li:nth-of-type(5) {
  width: 120px;
  font-size: 16px;
  color: #df4949;
  text-align: center;
}
.details li:nth-of-type(6) {
  width: 120px;
  text-align: end;
}
.details li:nth-of-type(6) a {
  display: inline-block;
  color: #808080;
  margin-right: 10px;
}
.details_mes {
  width: 335px;
  height: 100px;
  display: flex;
}
.details_mes input {
  width: 22px;
  height: 18px;
}
.details_mes_name p {
  padding: 2px;
  color: #808080;
  border: 1px solid #808080;
  border-radius: 4px;
  margin-right: 4px;
  font-size: 10px;
  display: inline-block;
  vertical-align: middle;
  line-height: 12px;
  margin-top: -2px;
}
.details_mes_name {
  margin-left: 1.3em;
}
.mount {
  width: 111px;
  height: 28px;
  text-align: center;
  display: flex;
  line-height: 28px;
  margin-top: 2em;
}
.mount p {
  display: inline-block;
  width: 26px;
  height: 26px;
  background: #f4f4f4;
  border: 1px solid #e0e0e0;
  cursor: default;
}
.mount input {
  width: 59px;
  height: 26px;
  border: 1px solid #e0e0e0;
  text-align: center;
}
.mount input:focus {
  outline: none;
}
</style>
