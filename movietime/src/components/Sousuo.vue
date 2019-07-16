<template>
  <div class="sousuo">
    <div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          全部
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">全部</el-dropdown-item>
          <el-dropdown-item command="b">电影</el-dropdown-item>
          <el-dropdown-item command="c">影人</el-dropdown-item>
          <el-dropdown-item command="d">影院</el-dropdown-item>
          <el-dropdown-item command="e">商品</el-dropdown-item>
          <el-dropdown-item command="f">新闻</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i></i>
      <span class="span">|</span>
    </div>
    <div>
      <input type="text" class placeholder="请输入电影、商品、影院等" />
    </div>
    <div class="el-icon-search icon"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style scoped>
.sousuo {
  width: 500px;
  height: 38px;
  border: 1px solid lightgray;
  border-radius: 19px;
  margin: 10px auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 8px 4px 7px 14px;
}
.el-dropdown-link {
  cursor: pointer;
  color: gray;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.span {
  height: 14px;
  color: lightgray;
  margin: 12px 10px 12px 12px;
}
input {
  width: 320px;
  height: 20px;
  border: 1px solid transparent;
  outline: none;
}
.icon {
  width: 54px;
  height: 32px;
  margin-top: -6px;
  font-size: 18px;
  border: 0px solid transparent;
  border-radius: 20px;
  text-align: center;
  line-height: 32px;
}
.icon:hover {
  background-color: #1e7dd7;
  color: white;
}
</style>
