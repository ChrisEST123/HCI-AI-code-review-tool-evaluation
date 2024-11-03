<template>
  <div id="app">
    <header>
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/example">Example</router-link>
        <button @click="logOut()">Log Out</button>
        <button @click="toggleMenu()">Menu</button>
      </nav>
    </header>
    <main>
      <Hello v-if="showHello" />
      <img alt="Vue logo" src="@/assets/images/logo.png" width="120" />
      <router-view />
    </main>
  </div>
</template>

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
    &:hover {
      background-color: #42b983;
    }
  }
  button {
    margin-left: 15px;
    background-color: blue;
    color: white;
  }
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
import Hello from './components/Hello.vue';

export default {
  components: { Hello },
  data() {
    return {
      showHello: false,
    };
  },
  methods: {
    logOut() {
      console.log("User logged out");
    },
    toggleMenu() {
      this.showHello = !this.showHello;
    },
  },
}
</script>
