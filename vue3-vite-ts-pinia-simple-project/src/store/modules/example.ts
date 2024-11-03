import { defineStore } from "pinia";
import { fetchPokemon } from "../http/api";

export const useCounterStore = defineStore("main", {
  state: () => ({
    name: "Lucas",
    counter: 0,
    pokemonData: null,
  }),
  actions: {
    async getPokemon(id: number) {
      const data = await fetchPokemon(id);
      this.pokemonData = data;
      console.log(data.name);
    },
  },
});
