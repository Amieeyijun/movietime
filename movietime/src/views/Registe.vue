<template>
  <div class="reg-parent">
    <top-menu></top-menu>
    <div class="body">
      <!-- <el-upload
      class="avatar-uploader myupload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div style="color:gray;font-size:12px">上传头像</div> -->
    <div style="font-size:28px;margin-top:40px;color:gray"> 新用户注册</div>
    <div class="registe">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="生日" prop="checkPass">
          <el-date-picker  class="date" v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;
    var rag = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } 
      else if(reg.test(value)==false){
        callback(new Error("密码至少包括数字、字母、字符两种，长度6-16位。"))
      }
        else if(reg.test(value)) {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateEmail =(rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (rag.test(value)==false) {
          callback(new Error("请输入正确的邮箱格式"))
        }else{
          callback()
        }
      }
    };
    return {
      imageUrl: "",
      ruleForm: {
        pass: "",
        checkPass: "",
        name: "",
        email:""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2: "",
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        checkPass: [{ validator: validatePass2, trigger: "change" }],
        email:[{ validator: validateEmail, trigger: "blur" }]

      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(this.value1)
        
        var da =new Date(this.value1);
         var date1=`${da.getFullYear()}-${da.getMonth()}-${da.getDate()}`
        
        this.ruleForm.value1=date1;
        if (valid) {
          this.axios
            .post("/Registe", this.ruleForm)
            .then(response => {
              if (response.data.msg == "username_already_exist") {
                this.$alert("用户名已存在", "注册界面", {
                  confirmButtonText: "确定",
                  callback: action => {}
                });
              } else if (response.data.msg == "reg_success") {
                const h = this.$createElement;

                this.$notify({
                  title: "用户注册",
                  message: h("i", { style: "color: teal" }, "恭喜您，注册成功")
                });
                this.$router.push({ path: "/Load" });
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
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.registe {
  width: 25em;
  margin: 68px auto;
}
/* .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 98px;
  height: 98px;
  line-height: 98px;
  text-align: center;
}
.avatar {
  width: 98px;
  height: 98px;
  display: block;
} */
/* .myupload [class*=" el-icon-"],
.myupload [class^="el-icon-"] {
  line-height: 98px;
} */
.body{
  width: 991px;
  height: 37.5em;
  border:1px solid transparent;
  border-radius: 15px;
  margin: 2em auto;
  background-color:white
}
.reg-parent{
  background-color:rgba(84,92,100,0.3);
  padding:0 0 2em 0; 
}
</style>
