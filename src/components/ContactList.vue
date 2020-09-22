<template>
    <ul class="list">
        <ContactItem 
            v-for="item of contacts"
            :item="item"
            :key="item.id"
        />
    </ul>
</template>

<script>
import ContactItem from './ContactItam'

export default {
    name: 'ContactList',
    props: [ 'contacts' ],
    components: { ContactItem }
}
</script>

<style scoped>
.list {
    list-style: none;
    padding: 0;
}
</style>