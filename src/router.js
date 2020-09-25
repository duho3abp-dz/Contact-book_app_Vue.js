import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Contacts from '@/pages/Contacts';
import User from '@/pages/User';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/contacts',
            component: Contacts
        },
        {
            path: '/contacts/:id',
            component: User
        }
    ]
});