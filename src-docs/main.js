import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/helpers/modality'




const app = new Vue({
    router,
    ...App
})

app.$mount('#app')
