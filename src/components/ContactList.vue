//---------------------RENDER---------------------//
<template>
    <ul>
        <ContactItem 
            v-for="item of contacts"
            :item="item"
            :key="item.id"
        />
    </ul>
</template>

//---------------------LOGIC---------------------//
<script>
import ContactItem from './ContactItam'

export default {
    name: 'ContactList',
    props: [ 'contacts' ],
    components: { ContactItem }
}
</script>