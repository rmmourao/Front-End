import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
// import './assets/css/teste.css';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);

// Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VeeValidate, {

  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
