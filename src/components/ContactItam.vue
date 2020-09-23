//---------------------RENDER---------------------//
<template>
    <li class="item">
        <router-link 
            class="link" 
            :to="{path: `/${item.id}`}"
            :item="item"
        >
            {{item.lastName}} {{item.firstName}}
        </router-link>
        <button class="delete">&times;</button>
    </li>
</template>

//---------------------LOGIC---------------------//
<script>
export default {
    name: 'ContactItem',
    props: ['item']
}
</script>

//---------------------STYLE---------------------//
<style scoped>
.item {
    display: flex;
    justify-content: center;
}
.delete {
    font-size: 25px;
    font-weight: 500;
    color: #2c3e50;
    background: #fff;
    outline: none;
    border: none;
    cursor: pointer;
}
.delete:hover {
    font-weight: 600;
}
</style>