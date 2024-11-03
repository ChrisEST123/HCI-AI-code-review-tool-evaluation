import { defineStore } from "pinia";

export const useCounterStore = defineStore("main", {
  state: () => ({
    name: "Lucas",
    counter: 0,
    items: [] as Array<{ id: number; name: string }>,
    selectedItem: null,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    allItems: (state) => state.items,
  },
  actions: {
    increment() {
      this.counter++;
    },
    selectItem(id: number) {
      this.selectedItem = this.items.find(item => item.id === id);
    },
    addItem(name: string) {
      this.items.push({ id: this.items.length + 1, name });
    },
    updateItem(id: number, name: string) {
      const item = this.items.find(item => item.id === id);
      if (item) {
        item.name = name;
      } else {
        console.error("Item not found!");
      }
    },
    deleteItem(id: number) {
      this.items = this.items.filter(item => item.id !== id);
    },
  },
});
