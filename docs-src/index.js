import 'helpers/modality';
// eslint-disable-next-line no-unused-vars
import prism from 'prismjs';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes.routes,
    linkActiveClass: 'is-active'
});

const app = new Vue({
    router,
    render(h) {
        return h(App);
    }
});

app.$mount('#app');
