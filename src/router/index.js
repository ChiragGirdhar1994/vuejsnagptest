import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const parseProps = r => ({ id: parseInt(r.params.id) });
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "bundle.heroes" */ '../views/Home.vue'),
  },
  {
    path: '/home/:taskid ',
    name: 'task',
    // props: true,
    props: parseProps,
    component: () =>
      import(/* webpackChunkName: "bundle.heroes" */ '../views/Task.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
