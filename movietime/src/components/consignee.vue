<template>
  <div class="consign">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="收货人" prop="people">
        <el-input v-model="ruleForm.people"></el-input>
      </el-form-item>
      <el-form-item label="收货地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="beizhu">
        <el-input type="textarea" v-model="ruleForm.beizhu"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">生成订单</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        people: "",
        address: "",
        delivery: false,
        phone: "",
        beizhu: ""
      },
      rules: {
        people: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入地址", trigger: "blur" },
          { min: 5, max: 50, message: "长度在 5 到 50 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入联系方式", trigger: "blur" }
        ],
        beizhu: [{ required: true, message: "请填写备注", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
          console.log(valid)
        if (valid) {
          this.axios
            .post("/consignee",this.ruleForm)
            .then(response => {
                console.log(response)
              if (response.data.msg == "ok") {
                this.$alert("订单生成成功", "订单界面", {
                  confirmButtonText: "确定",
                  callback: action => {}
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
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.consign {
  width: 500px;
  height: 370px;
  margin: 20px 25em;
}
</style>
