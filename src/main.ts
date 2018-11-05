import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import i18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(i18n)

new Vue({
  render: h => h(App)
}).$mount('#app')
