// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'babel-polyfill'
import vuescroll from 'vuescroll';
import VueLazyLoad from 'vue-lazyload';


Vue.use(VueI18n)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// 你可以在这里设置全局配置
Vue.use(vuescroll, {
  sizeStrategy: 'percent',
  detectResize: true,
  scrollPanel: {
    initialScrollY: false,
  },
  ops: {}, // 在这里设置全局默认配置
  name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
});

//图片轮播
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './static/img/loading.jpg',
  loading: './static/img/loading.jpg',
  attempt: 2
})

Vue.config.productionTip = false

//let language = navigator.language;

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh: require("./assets/i18n/zh"),
    en: require("./assets/i18n/en")
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
