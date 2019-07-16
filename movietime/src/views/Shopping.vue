<template>
  <div>
    <top-menu></top-menu>

    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <!-- 导航栏s -->
        <top-menu></top-menu>
        <!-- 标题栏 -->
        <div class="trade">
          <div class="trade_head">
            <h3>我的购物车</h3>
            <div class="trade_step">
              <el-steps :active="0" align-center>
                <el-step title="我的购物车"></el-step>
                <el-step title="填写订单"></el-step>
                <el-step title="付款"></el-step>
                <el-step title="支付成功"></el-step>
              </el-steps>
            </div>
          </div>
        </div>
        <!-- 商品栏 -->
        <div class="content">
          <div class="cart_conter">
            <div class="cart_prolist">
              <ul>
                <li>
                  <input type="checkbox" name="selectall" />
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
            <div class="cart_prolist">
              <prolist></prolist>
            </div>
          </div>
        </div>
        <bottom-menu></bottom-menu>
      </el-col>
    </el-row>
    <bottom-menu></bottom-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>

  


<style >
.trade {
  width: 100%;
  height: 160px;
  background-color: #1c7ca9;
  padding: 1px;
}
.trade_head {
  width: 1000px;
  height: 24px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  color: white;
  margin-top: 6.62em;
}
.trade_head h3 {
  font-weight: normal;
  font-size: 24px;
  color: #fff;
}
.trade_head .trade_step {
  width: 400px;
}
.trade_step .el-step__title {
  font-size: 14px;
}
.trade_step .el-step__title.is-finish {
  color: white;
}
.trade_step .el-step__head.is-finish {
  color: white;
}
.trade_step .el-step__title.is-process {
  font-weight: 700;
  color: white;
}
.trade_step .el-step__head.is-process {
  color: #1c7ca9;
  border-color: #1c7ca9;
}
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
</style>


