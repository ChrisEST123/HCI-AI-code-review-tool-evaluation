import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const fetchPokemon = async (id: number) => {
  const response = await api.get(`/pokemon/${id}`);
  console.log(response.data);
  return response;
};
