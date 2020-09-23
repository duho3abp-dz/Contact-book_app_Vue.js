//---------------------RENDER---------------------//
<template>
    <div>
        <h2>Contacts</h2>
        <ContactList :contacts="contacts" @delete-user="userDelete"/>
    </div>
</template>

//---------------------LOGIC---------------------//
<script>
import ContactList from '@/components/ContactList'

export default {
    name: 'Contacts',
    props: ['contacts'],
    components: {
        ContactList
    },
    methods: {
        userDelete(id) {
            this.$emit('delete-user', id);
        }
    }
}
</script>