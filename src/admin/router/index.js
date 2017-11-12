import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Demo from 'admin/components/demo.vue'

Vue.use(Router)

export default new Router({
    base: '/admin/',
    //mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/demo', component: Demo },
    ]
})