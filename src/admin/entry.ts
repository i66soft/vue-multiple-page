import Vue from 'vue'
import AdminApp from './admin-app.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    el: '#admin-app',
    router,
    template: '<AdminApp/>',
    components: { AdminApp }
})