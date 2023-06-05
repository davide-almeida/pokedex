import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://pokeapi.co/api/v2',
});

// get all pokemons
export const getPokemons = async (apiUrl: string = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0") => {
  try {
    const response = await api.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// get pokemon by name
export const getPokemon = async (pokeName: string) => {
  try {
    const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}