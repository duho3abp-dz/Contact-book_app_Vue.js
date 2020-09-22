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
.link {
    text-decoration: none;
    color: #2c3e50;
    font-size: 20px;
    display: block;
    border: 1px solid #2c3e504d;
    border-radius: 30px;
    margin-bottom: 2px;
    width: 90%;
    transition: .2s;
}
.link:hover {
    background: #2c3e5023;
}
</style>