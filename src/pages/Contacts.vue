//---------------------RENDER---------------------//
<template>
    <div class="contacts-block">
        <h2>Contacts</h2>
        <AddContact 
            :class="{addActive: addContactActive}" 
            @add-contact="addContact"
        />
        <ContactList 
            :contacts="contacts" 
            @delete-user="userDelete"
        />
        <router-link class="back-link" to='/'>
            <img class="pic" src="../assets/icons/left-arrow.svg" alt="back">
        </router-link>
        <a class="add-link" @click="toggleAddContactWindow">
            <img class="pic" src="../assets/icons/plus.svg" alt="plus">
        </a>
    </div>
</template>

//---------------------LOGIC---------------------//
<script>
import ContactList from '@/components/ContactList'
import AddContact from '@/components/AddContact'

export default {
    name: 'Contacts',
    props: ['contacts'],
    data() {
        return {
            addContactActive: false
        }
    },
    components: {
        ContactList,
        AddContact
    },
    methods: {
        userDelete(id) {
            this.$emit('delete-user', id);
        },
        toggleAddContactWindow() {
            this.addContactActive = !this.addContactActive;
        },
        addContact(obj) {
            this.$emit('add-contact', obj);
            this.addContactActive = false;
        }
    }
}
</script>

<style scoped>
.contacts-block {
    position: relative;
}
.add-link, .back-link {
    position: absolute;
    cursor: pointer;
}
.add-link {
    top: -3px;
    right: 5%;
    width: 20px;
}
.back-link {
    top: -7px;
    left: 5%;
    width: 30px;
}
.add-img {
    width: 100%;
}
.addActive {
    height: 150px;
}
</style>