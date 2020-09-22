<template>
    <div>
        <h2>{{userName}}</h2>
        <div>{{user.firstName}}</div>
        <div>{{user.lastName}}</div>
        <div>{{user.phone}}</div>
        <div>{{user.email}}</div>
        <router-link to="/">Contacts</router-link>
    </div>
</template>

<script>
import Contacts from './Contacts';

export default {
    props: ['contacts'],
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        let corrUser = {};
        this.contacts.forEach(obj => {
            if (obj.id === +this.$route.params.id) {
                corrUser = obj;
            }
        });
        this.user = corrUser;
    },
    computed: {
        userName() {
            return this.$route.params.id;
        }
    }
}
</script>