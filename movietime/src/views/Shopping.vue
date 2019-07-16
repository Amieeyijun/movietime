<template>
  <div>
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
        <prolist></prolist>
        <bottom-menu></bottom-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Prolist from "@/components/prolist.vue";
export default {
  data() {
    return {};
  },
  components: {
    prolist: Prolist
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

</style>



