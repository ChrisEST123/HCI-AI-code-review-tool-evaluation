<template>
  <div>
    <h1>Hello Component</h1>
    <p>This is a simple component!</p>
    <button @click="doSomething()">Click Me!</button>
    <button @click="toggleMessage">{{ showMessage ? 'Hide' : 'Show' }} Message</button>
    <p v-if="showMessage">{{ message }}</p>
    <input v-model="userInput" placeholder="Type something..." />
    <button @click="submitInput">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: false,
      message: "This is a toggled message!",
      userInput: '',
    };
  },
  methods: {
    doSomething() {
      console.log("Button clicked!");
    },
    toggleMessage() {
      this.showMessage = !this.showMessage;
    },
    submitInput() {
      if (this.userInput) {
        console.log("User input:", this.userInput);
        this.userInput = '';
      } else {
        console.error("Input is empty!");
      }
    },
  },
}
</script>

<style scoped>
div {
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}
button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
