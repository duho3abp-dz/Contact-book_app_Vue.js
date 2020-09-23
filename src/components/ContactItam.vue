<template>
    <li class="item">
        <router-link 
            class="link" 
            :to="{path: `/${item.id}`}"
            :item="item"
        >
            {{item.lastName}} {{item.firstName}}
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'ContactItem',
    props: ['item']
}
</script>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>