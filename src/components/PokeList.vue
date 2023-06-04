<template>
  <section class="poke-list">
    <PokeCard 
      v-for="(pokemon, index) in pokeData.results"
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

  export default defineComponent({
    data(): { pokeInfoList: Array<PokemonInfo>, pokeError: boolean, errorMsg: string } {
      return {
        pokeInfoList: [],
        pokeError: false,
        errorMsg: "",
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
        this.pokeError = false;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        if (data.status === 200) {
          const response = await data.json();
          this.pokeInfoList.push(response);
        } else if (data.status === 404) {
          this.pokeError = true;
          this.pokeInfoList = [];
          this.errorMsg = await data.text();
        } else {
          console.log("Erro inesperado");
        }
      }
    },
  });
</script>