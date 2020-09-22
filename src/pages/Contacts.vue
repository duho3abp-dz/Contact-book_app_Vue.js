<template>
    <div>
        <h2>Contacts</h2>
        <ContactList :contacts="contacts" />
    </div>
</template>

<script>
import ContactList from '@/components/ContactList'

export default {
    name: 'Contacts',
    props: ['contacts'],
    components: {
        ContactList
    }
}
</script>