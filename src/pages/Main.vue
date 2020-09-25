<template>
    <div>
        <h2>Description</h2>
        <div class="main">
            <p>
                This SPA application is implemented using Vue.js. <br>
                Application functionality: <br>
                - Add contact<br>
                - Delete contact (with confirmation)<br>
                - Go to the contact information of a contact<br>
                - Editing contact information (with confirmation)<br>
                - Undo the last change made "Step back"<br>
            </p>
            <router-link class="link main-link" to="/contacts">contacts</router-link>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 20px;
    font-size: 18px;
}
.main-link {
    width: 50%;
    margin: 20px auto 0;
}
</style>