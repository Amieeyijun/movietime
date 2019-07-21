import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsid: "",
    filmid: '',
    shopcar: 0
  },
  mutations: {

  },
  getters: {
    //购物车上面数字增加
    shopcarnum: state => {
      return state.shopcar += 0
    }

  },

  actions: {

  }
})
