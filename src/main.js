import Vue from 'vue';
import App from './App.vue';
import '@/services/svg-registration';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
