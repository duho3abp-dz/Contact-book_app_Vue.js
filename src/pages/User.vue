<template>
    <div>
        <h2>User</h2>
        <form>
            <ul class="user">
                <li class="user-list">
                    <div class="item item-left">First name:</div>
                    <div class="item item-right">
                        <p v-if="!setting">{{user.firstName}}</p>
                        <input 
                            v-else 
                            name="firstName" 
                            :value="user.firstName" 
                            type="text">
                    </div>
                </li>
                <li class="user-list">
                    <div class="item item-left">Last name:</div>
                    <div class="item item-right">
                        <p v-if="!setting">{{user.lastName}}</p>
                        <input 
                            v-else 
                            name="lastName" 
                            :value="user.lastName" 
                            type="text"
                        >
                    </div>
                </li>
                <li class="user-list">
                    <div class="item item-left">Phone:</div>
                    <div class="item item-right">
                        <p v-if="!setting">{{user.phone}}</p>
                        <input 
                            v-else 
                            name="phone" 
                            :value="user.phone" 
                            type="text"
                        >
                    </div>
                </li>
                <li class="user-list">
                    <div class="item item-left">Email:</div>
                    <div class="item item-right">
                        <p v-if="!setting">{{user.email}}</p>
                        <input 
                            v-else 
                            name="email" 
                            :value="user.email" 
                            type="text"
                        >
                    </div>
                </li>

                <a class="setting-link" @click="onSettings">
                    <img class="setting-pic" src="../assets/icons/settings.svg" alt="settings">
                </a>
            </ul>
            <input v-if="setting" class="link submit-btn" value="Confirm" type="submit">
            <router-link v-else  class="link link-back" to="/">Contacts</router-link>
        </form>
    </div>
</template>

<script>
export default {
    props: ['contacts'],
    data() {
        return {
            setting: false,
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
    methods: {
        onSettings() {
            this.setting = !this.setting;
        }
    }
}
</script>

<style scoped>
.user {
    position: relative;
}
.user-list {
    display: flex;
    justify-content: center;
}
.item {
    width: 45%;
    float: left;
    font-size: 20px;
}
.item-left {
    text-align: right;
    margin-right: 10px;
}
.item-right {
    text-align: left;
    font-weight: 500;
}
.link-back {
    display: inline-block;
    width: 50%;
    margin-bottom: 10px;
}
.setting-link {
    position: absolute;
    width: 3%;
    top: 0;
    right: 2%;
    cursor: pointer;
}
.setting-pic {
    width: 100%;
    opacity: .6;
}
.setting-pic:hover {
    opacity: 1;
}
.submit-btn {
    display: inline-block;
    width: 30%;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
}
</style>