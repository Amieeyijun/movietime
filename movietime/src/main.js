import Vue from 'vue'
import App from './App.vue'
import router from './router'
//ÒýÈëelementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import topMenu from './components/topMenu.vue'
import bottomMenu from './components/bottomMenu.vue'
import Sousuo from './components/Sousuo.vue'
import Magnify from './components/Magnify.vue'
import Minlbt from './components/minLbt.vue'
import Rousel from './components/rousel.vue'
import axios from 'axios'





Vue.prototype.axios = axios
axios.defaults.baseURL = "http://localhost:8888"

Vue.config.productionTip = false
//elementui
Vue.use(ElementUI);


Vue.component("top-menu",topMenu)
Vue.component("bottom-menu",bottomMenu)
Vue.component("Sousuo",Sousuo)
Vue.component("Magnify",Magnify)
Vue.component("min-lbt",Minlbt)
Vue.component("rousel",Rousel)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
