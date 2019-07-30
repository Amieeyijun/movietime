<template>
  <div class="parent">
    <top-menu></top-menu>
    <div class="load">
      
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name" class="mylabel">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" class="mylabel">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/Load", this.ruleForm)
            .then(response => {
              console.log(response)
              if(response.data.msg == "same"){
                const h = this.$createElement;

                this.$notify({
                  title: "用户登录",
                  message: h("i", { style: "color: teal" }, "恭喜您，登录成功")
                });
                this.$router.push({ path: "/" });
                window.sessionStorage.setItem("user",JSON.stringify(response.data.userinfo))
                console.log(window.sessionStorage)
              }else if(response.data.msg =="different"){
                const h = this.$createElement;

                this.$notify({
                  title: "用户登录",
                  message: h("i", { style: "color: teal" }, "抱歉,密码错误")
                });
              }
              else if(response.data.msg =="none"){
                const h = this.$createElement;

                this.$notify({
                  title: "用户登录",
                  message: h("i", { style: "color: teal" }, "抱歉，账户不存在")
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });


        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$router.push({ path: "/Registe" });
    }
    
  }
};
</script>
<style  lang="scss">
.load{
  width: 25em;
  margin-top: 22em;
  margin-left:12em 
}
.parent{
  background-image: url("../../img/bgc.jpg" );
  width: 100%;
  height: 47em;
}
.mylabel .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 16px;
    color:white !important;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>

