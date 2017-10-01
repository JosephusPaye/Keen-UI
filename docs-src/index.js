import 'helpers/modality';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './navigation.js';

// Allow inspection, even in production mode
Vue.config.devtools = true;

// Turn off the nagging production tip
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

const app = new Vue({
    router,
    render(h) {
        return h(App);
    }
});

app.$mount('#app');
