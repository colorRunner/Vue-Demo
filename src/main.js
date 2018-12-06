import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer' //加载mockServer

//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>

import './filters'

new Vue({
  el: '#app',
  router,
  store,
  render: h=>h(App)
})
