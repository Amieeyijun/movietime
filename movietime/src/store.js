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
    //���ﳵ������������
    shopcarnum: state => {
      return state.shopcar += 0
    }

  },

  actions: {

  }
})
