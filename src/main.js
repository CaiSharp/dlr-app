import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueChart from 'vue-chartjs'
import {routes} from "./js/routes";
import {store} from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueChart);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
