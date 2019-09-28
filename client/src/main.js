import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import PokeProfile from './components/PokeProfile.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/:id', component: PokeProfile},
  ],
  mode: 'history'
})

//Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
