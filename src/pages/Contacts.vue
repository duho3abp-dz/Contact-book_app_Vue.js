//---------------------RENDER---------------------//
<template>
    <div class="contacts-block">
        <a class="add-link" @click="toggleAddContactWindow">
            <img class="pic" src="../assets/icons/plus.svg" alt="plus">
        </a>
        <h2>Contacts</h2>
        <AddContact 
            :class="{addActive: addContactActive}" 
            @add-contact="addContact"
        />
        <ContactList 
            :contacts="contacts" 
            @delete-user="userDelete"
        />
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
.add-link {
    position: absolute;
    top: -3px;
    right: 5%;
    width: 20px;
    cursor: pointer;
}
.add-img {
    width: 100%;
}
.addActive {
    height: 150px;
}
</style>