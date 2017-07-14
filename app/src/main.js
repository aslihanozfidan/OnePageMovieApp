import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routerOptions from './router/router';
import storeOptions from './stores/store';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(routerOptions);
const store = new Vuex.Store(storeOptions);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
