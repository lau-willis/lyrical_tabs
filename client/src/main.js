// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import Panel from './components/Panel.vue'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.component('panel', Panel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
