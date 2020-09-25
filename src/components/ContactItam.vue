//---------------------RENDER---------------------//
<template>
    <li class="item">
        <router-link 
            class="link" 
            :to="{path: `/contacts/${item.id}`}"
            :item="item"
        >
            {{item.lastName}} {{item.firstName}}
        </router-link>

        <a v-if="!remove" class="delete" @click="onRemove">
            <img class="svg-pic" src="../assets/icons/cancel.svg" alt="delete">
        </a>
        <span class="confirm" v-else>
            <a class="delete" @click="$emit('delete-user', item.id)">
                <img class="svg-pic" src="../assets/icons/tick.svg" alt="ok">
            </a>
            <a class="delete" @click="onRemove">
                <img class="svg-pic" src="../assets/icons/cancel.svg" alt="cancel">
            </a>
        </span>
        
    </li>
</template>

//---------------------LOGIC---------------------//
<script>
export default {
    name: 'ContactItem',
    props: ['item'],
    data() {
        return {
            remove: false
        }
    },
    methods: {
        onRemove() {
            this.remove = !this.remove;
        }
    }
}
</script>

//---------------------STYLE---------------------//
<style scoped>
.item {
    display: flex;
    justify-content: center;
}
.delete {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 12px;
    font-weight: 500;
    color: #2c3e50;
    background: #fff;
    outline: none;
    border: none;
    opacity: .5;
    cursor: pointer;
}
.delete:hover {
    opacity: 1;
}
.svg-pic {
    width: 100%;
}
.confirm {
    display: flex;
}
</style>