import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import store from './store';
import * as VeeValidate from 'vee-validate';
import 'popper.js/dist/popper.min.js' 
import 'bootstrap/dist/css/bootstrap.min.css'

import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.js'

Vue.use(VeeValidate);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.auth.getters.loggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
