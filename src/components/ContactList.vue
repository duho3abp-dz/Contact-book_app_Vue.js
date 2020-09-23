//---------------------RENDER---------------------//
<template>
    <ul>
        <ContactItem 
            v-for="item of contacts"
            :item="item"
            :key="item.id"
            @delete-user="deleteUser"
        />
    </ul>
</template>

//---------------------LOGIC---------------------//
<script>
import ContactItem from './ContactItam'

export default {
    name: 'ContactList',
    props: [ 'contacts' ],
    components: { ContactItem },
    methods: {
        deleteUser(id) {
            this.$emit('delete-user', id);
        }
    }
}
</script>