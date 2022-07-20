import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeV from '../views/HomeV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeV',
    component: HomeV
  },
  
]

const router = new VueRouter({
  routes
})

export default router
