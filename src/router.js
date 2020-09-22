import Vue from 'vue';
import Router from 'vue-router';
import Contacts from '@/pages/Contacts';
import User from '@/pages/User';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Contacts
        },
        {
            path: '/:id',
            component: User
        }
    ]
});