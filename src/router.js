import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ImageDisplay from './components/ImageDisplay'

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/img-display',
    name: 'img-display',
    component: ImageDisplay
  }]
}) 