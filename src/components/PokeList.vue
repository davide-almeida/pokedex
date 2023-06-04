<template>
  <section class="poke-list">
    <PokeCard 
      v-for="(pokemon, index) in pokeInfoList"
      :key="pokemon.name"
      :pokeInfo="pokeInfoList[index]"
      class="poke-card"
    />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PokeCard from "./PokeCard.vue";
  import { PokemonInfo, pokeDataType } from '../types';
  import { getPokemon } from '../services/pokemons.ts';


  export default defineComponent({
    data(): { pokeInfoList: Array<PokemonInfo>, pokeError: boolean } {
      return {
        pokeInfoList: [],
        pokeError: false,
      }
    },
    props: {
      pokeData: {
        type: Object as () => pokeDataType,
        required: true,
      }
    },
    components: {
      PokeCard,
    },
    watch: {
      pokeData: {
        handler() {
          this.getPokemonData();
        },
        deep: true,
      }
    },
    mounted() {
      this.getPokemonData();
    },
    methods: {
      async getPokemonData() {
        for (const pokemon of this.pokeData.results) {
          await this.getPokemon(pokemon.name);
        }
      },
      async getPokemon(pokeName: string) {
        try {
          const data = await getPokemon(pokeName);
          this.pokeInfoList.push(data);
          this.pokeError = false;
        } catch (error) {
          console.log('Erro ao buscar dados da API:', error);
          this.pokeError = true;
          this.pokeInfoList = [];
        }
      },
    },
  });
</script>