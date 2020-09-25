<template>
    <form @submit.prevent="onSubmitContact">
        <input class="add-input" v-model="firstName" name="firstName" type="text" placeholder="Ivan" required>
        <input class="add-input" v-model="lastName" name="lastName" type="text" placeholder="Ivanov" required>
        <input class="add-input" v-model="phone" name="phone" type="text" placeholder="+(999) 999-99-99" required>
        <input class="add-input" v-model="email" name="email" type="text" placeholder="IvanIvanov@yandex.ru">
        <div class="add-footer">
            <input class="link link-add" type="submit" value="add">
            <a class="add-reset" @click="clearState">reset</a>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    },
    methods: {
        onSubmitContact() {
            const { firstName, lastName, phone, email } = this,
                  id = new Date().getTime(),
                  newContact = { id, firstName, lastName, phone, email };
            
            this.$emit('add-contact', newContact);
            this.clearState();
        },
        clearState() {
            this.firstName = '';
            this.lastName = '';
            this.phone = '';
            this.email = '';
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #2c3e5049;
    height: 0px;
    overflow: hidden;
    position: relative;
    transition: .2s;
}
.add-input {
    text-align: center;
    margin-top: 3px;
}
.link-add {
    width: 20%;
    font-size: 16px;
    margin: 5px 0 5px;
    cursor: pointer;
}
.add-footer {
    width: 100%;
    display: flex;
    justify-content: center;
}
.add-reset {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
    font-weight: 600;
    opacity: .6;
    transition: .2s;
}
.add-reset:hover {
    opacity: 1;
}
</style>