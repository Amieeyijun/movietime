<template>
  <div>
    <div class="imgbox" @click="toDetail(id)">
      <img :src="mysrc" :alt="myalt" />

      <div>
        <div class="ziybox">
          <div class="ziy">自营</div>
          <div>{{goodsname}}</div>
        </div>
        <div class="price">
          <div>{{price}}</div>
          <a href="javascript:void(0)" class="el-icon-shopping-cart-2" style="font-size:20px"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["mysrc", "goodsname", "price", "myalt", "id"],
  methods: {
    toDetail(id) {
      this.$router.push("/Magnify?id=" + id);
    }
  }
};
</script>
<style scoped>
.imgbox {
  width: 14.375em;
  height: 19.625em;
}
.imgbox > img {
  width: 14.5em;
  height: 14.5em;
}
.ziybox {
  display: flex;
  color: black;
  font-size: 14px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.ziy {
  color: #808080;
  font-size: 10px;
  border: 1px solid #808080;
  border-radius: 4px;
}
.price {
  display: flex;
  justify-content: flex-end;
}
.price > div {
  flex: 1;
}
</style>
