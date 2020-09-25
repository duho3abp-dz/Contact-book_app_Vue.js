// ---------------------RENDER---------------------//
<template>
    <div>
        <h2>User</h2>
        <form @submit.prevent="onSubmit">
            <ul class="user">
                <li class="user-list">
                    <div class="item item-left">First name:</div>
                    <div class="item item-right">
                        <p v-if="!setting">{{user.firstName}}</p>
                        <input 
                            v-else 
                            name="firstName"
                            v-model="newUser.firstName" 
                            type="text"
                        >
                    </div>
                </li>
                <li class="user-list">
                    <div class="item item-left">Last name:</div>
                    <div class="item item-right">
                        <p v-if="!setting">{{user.lastName}}</p>
                        <input 
                            v-else 
                            name="lastName"
                            v-model="newUser.lastName" 
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
                            v-model="newUser.phone" 
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
                            v-model="newUser.email" 
                            type="text"
                        >
                    </div>
                </li>

                <a class="setting-link" @click="onSettings">
                    <img class="pic" src="../assets/icons/settings.svg" alt="settings">
                </a>
                <a class="undo-link" @click="stepBack">
                    <img class="pic" src="../assets/icons/undo.svg" alt="step-back">
                </a>
            </ul>


            <div v-if="setting">
                <a @click.prevent="onConfirm" v-if="!confirm" class="link confirm-btn">Confirm</a>
                <div v-else>
                    <p>Are you sure you want to save your changes?</p>
                    <input class="link submit-btn" value="Yes" type="submit">
                    <a @click="formReset" class="link link-back verific-no">No</a>
                </div>
            </div>

            <router-link v-else  :click="changeUser" class="link link-back" to="/">Contacts</router-link>
        </form>
    </div>
</template>

//---------------------LOGIC---------------------//
<script>
export default {
    props: ['contacts'],
    data() {
        return {
            newUser: {},
            setting: false,
            saveUser: {},
            user: {},
            confirm: false
        }
    },
    mounted() {
        let corrUser = {};
        this.contacts.forEach(obj => {
            if (obj.id === +this.$route.params.id) {
                corrUser = obj;
            }
        });
        this.user = {...corrUser};
        this.newUser = {...corrUser};
        this.saveUser = {...corrUser};
    },
    methods: {
        onSettings() {
            this.setting = !this.setting;
            this.newUser = {...this.user};
        },
        onConfirm() {
            this.confirm = !this.confirm;
        },
        onSubmit() {
            this.user = {...this.newUser};
            this.setting = false;
            this.confirm = false;
        },
        formReset() {
            this.newUser = {...this.user};
            this.setting = false;
            this.confirm = false;
        },
        stepBack() {
            this.user = {...this.saveUser};
            this.newUser = {...this.saveUser};
        },
        changeUser() {
            this.$emit('change-user', this.user)
        }
    }
}
</script>

//---------------------STYLE---------------------//
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
.setting-link, .undo-link {
    position: absolute;
    width: 25px;
    right: 2%;
    cursor: pointer;
}
.setting-link {
    top: 0;
}
.undo-link {
    top: 40%;
}
.submit-btn, .confirm-btn {
    display: inline-block;
    width: 30%;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
}
.verific-no {
    width: 30%;
}
</style>