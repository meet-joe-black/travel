import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont.css'
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
