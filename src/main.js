import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import Components from '@/components'
import checkPermission from '@/mixin/checkPermission'
import i18n from '@/lang'

import '@/icons' // icon
import '@/permission' // permission control
import { imagerror } from './directives'
import * as filters from '@/utils/filters'
import Print from 'vue-print-nb'

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
Vue.directive('imagerror', imagerror)
Vue.use(Components)
Vue.use(Print)
Vue.mixin(checkPermission)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
