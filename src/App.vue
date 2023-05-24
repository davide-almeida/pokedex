<template>
  <form @submit.prevent="getPokemon">
    <label for="search">Busca</label>
    <input type="text" id="search" v-model="pokeName"/>
    <button type="submit">Buscar</button>
  </form>

  <p v-show="pokeError">Erro ao procurar pokemon =/</p>

  <div v-if="pokeInfo">
    <h1>{{ pokeInfo.name }}</h1>
    <span>Abilities:</span>
    <ul>
      <li v-for="item in pokeInfo.abilities" :key="item.ability.name">{{ item.ability.name }}</li>
    </ul>
    <h1>Imagem:</h1>
    <img :src="pokeInfo?.sprites?.other?.home?.front_default" alt="poke img">
  </div>
</template>

<style>
  img {
    max-width: 200px;
  }
</style>

<script lang="ts">
  import { defineComponent } from 'vue';

  interface PokemonInfo {
    name: string;
    abilities: Array<{ ability: { name: string } }>;
    sprites: {
      other: {
        home: {
          front_default: string;
        };
      };
    };
  }

  export default defineComponent({
    data() {
      return {
        pokeName: "" as string,
        pokeInfo: {} as PokemonInfo,
        pokeError: false as boolean,
      }
    },
    methods: {
      async getPokemon(this: { pokeName: string; pokeInfo: PokemonInfo | null; pokeError: boolean }): Promise<void> {
        try {
          this.pokeError = false
          this.pokeInfo = {} as PokemonInfo;
          const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokeName}`)
          const response = await data.json()
          this.pokeInfo = response
        } catch (error) {
          this.pokeError = true
        }
      }
    }
  });
</script>
