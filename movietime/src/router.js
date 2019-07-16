import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registe from './views/Registe.vue'
import Ticket from './views/Ticket.vue'
import Mall from './views/Mall.vue'
import News from './views/News.vue'
import Discover from './views/Discover.vue'
import Shopping from './views/Shopping.vue'
import Load from './views/Load.vue'
import Magnify from "./components/Magnify.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Registe',
      component: Registe
    },
    {
      path: '/Load',
      component: Load
    },
    {
      path: '/Ticket',
      component: Ticket
    }, {
      path: '/Mall',
      component: Mall
    }, {
      path: '/News',
      component: News
    }, {
      path: '/Discover',
      component: Discover
    },
    {
      path: '/Shopping',
      component: Shopping
    },
    {
      path: '/Magnify',
      component: Magnify
    }
  ]
})
