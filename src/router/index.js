import Vue from 'vue'
import Router from 'vue-router'
import charts from '@/components/charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'charts',
      component: charts
    }
  ]
})
