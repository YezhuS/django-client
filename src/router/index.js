import Vue from 'vue'
import Router from 'vue-router'

import ListNote from '../components/Note/ListNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notes',
      name: 'ListNote',
      component: ListNote
    },
  ],
  mode: 'history'
})
