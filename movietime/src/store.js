import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmid: '',
    shopcar: 0,
    car: []
  },
  mutations: {
    addCar(state, binfo) {
      let r = 0;
      //不直接修改state里面的数据 创建一个副本
      let carlist = state.car;
      for (let ind = 0; ind < carlist.length; ind++) {
        //如果加入的重复加入商品只增加商品的数量而不会重复渲染商品
        if (carlist[ind].id == binfo.id) {
          carlist[ind].num++;
          r = 1;
          break;
        }
      }
      //如果r=1 就不把商品push到数组里 只增加数量 不然就会有bug
      r || carlist.push(binfo);
      state.car = carlist
    },
    delPro(state, gid) {
      let carlist = state.car;
      for (let ind = 0; ind < carlist.length; ind++) {
        //如果加入的重复加入商品只增加商品的数量而不会重复渲染商品
        if (carlist[ind].id == gid) {
          // carlist[ind].num++;
          state.shopcar -= carlist[ind].num
          carlist.splice(ind, 1);

          return carlist
        }
        state.car = carlist
      }
    }
  },
  getters: {
    //导航栏购物车图标上面数字增加
    shopcarnum: state => {
      return state.shopcar += 0
    },
    totalprice: function (state) {
      let tp = 0;
      for (let ind = 0; ind < state.car.length; ind++) {
        let price = Number(state.car[ind].price.substr(1))
        tp += price * state.car[ind].num;
      }
      return tp
    }
  },

  actions: {

  }
})
