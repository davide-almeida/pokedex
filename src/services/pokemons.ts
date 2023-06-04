import axios from './pokeAxios';

export const getPokemons = async (limit: number = 0, offset: number = 10) => {
  try {
    const response = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.log('Erro ao buscar dados da API:', error);
    throw error;
  }
}
