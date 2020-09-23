<template>
  <div id="app">
    <h1>CONTACT BOOK</h1>
    <div class="wrapper">
      <router-view :contacts="contacts" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        contacts: [
          {id: 1, firstName: 'Danila', lastName: 'Zhidkov', phone: '+7 (977) 614-18-33', email: 'DanZhidkof@yandex.ru'},
          {id: 2, firstName: 'Nikita', lastName: 'Zaycev', phone: '+7 (964) 123-45-67', email: 'nikzaycev@mail.ru'},
          {id: 3, firstName: 'Alexander', lastName: 'Ovechkin', phone: '+7 (988) 888-88-88', email: 'Ovi8@gmail.com'},
          {id: 4, firstName: 'Vladimir', lastName: 'Putin', phone: '+7 (999) 999-99-99', email: 'putin@putin.ru'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wrapper {
  width: 70%;
  border: 2px solid #2c3e5049;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 60px;
}
ul {
    list-style: none;
    padding: 0;
}
h2 {
    border-bottom: 2px solid #2c3e5049;
}
p {
  margin: 0;
}
input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
  border: 1px solid #2c3e5049;
  border-radius: 5px;
  width: 60%;
  font-weight: 600;
  color: #2c3e50;
  font-size: 15px;
}
.link {
    text-decoration: none;
    background: #fff;
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
