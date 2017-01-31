import '../src/helpers/modality';

import Vue from 'vue';

// Allow devtools inspection, even in production mode
Vue.config.devtools = true;

import App from './App.vue';

new Vue({
    el: 'body',
    components: {
        App
    }
});
