<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
  <img alt="Vue logo" src="@/assets/images/logo.png" width="120" />
  <div class="welcome-message">
    <h1>Welcome to the App</h1>
    <p>This is a sample application.</p>
    <img src="welcome-image.png" alt="Welcome Image" />
    <button @click="showAlert">Click Me</button>
  </div>
  <router-view />
</template>

<script lang="ts">
export default {
  methods: {
    showAlert() {
      alert("Welcome!");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.welcome-message {
  margin: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  h1 {
    color: red;
    font-size: 2em;
  }
  p {
    font-size: 1.2em;
    color: blue;
  }
  img {
    width: 100px;
    height: auto;
  }
}
</style>
