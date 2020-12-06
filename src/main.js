import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
