import { defineStore } from "pinia";

export const useCounterStore = defineStore("main", {
  state: () => ({
    name: "Lucas",
    counter: 0,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loggedIn: false,
  }),
  actions: {
    login() {
      this.user = { name: "User" };
      this.loggedIn = true;
    },
    logout() {
      this.user = null;
      this.loggedIn = false;
    },
    getStatus() {
      return this.loginStatus;
    },
  },
});
