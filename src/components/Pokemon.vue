<template>
  <section class="search-page">
    <form class="search-form" @submit.prevent="getPokemon">
      <input type="text" id="search" class="search-input" v-model="pokeName"/>
      <button type="submit" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>

    <PokeError
      v-if="pokeError"
      :errorMsg="errorMsg"
    />

    <PokeCard
      v-if="pokeInfo"
      :pokeInfo="pokeInfo"
    />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { PokemonInfo } from '../types';
  import type { PokeIconsType } from '../utils/icons.ts';
  import { pokeIcons } from '../utils/icons.ts';
  import PokeCard from "./PokeCard.vue";
  import PokeError from "./PokeError.vue"

  export default defineComponent({
    data(): { pokeInfo: PokemonInfo | null, pokeError: boolean, pokeName: string, pokeIcons: PokeIconsType, errorMsg: string } {
      return {
        pokeName: "",
        pokeInfo: null,
        pokeError: false,
        pokeIcons,
        errorMsg: "",
      }
    },
    methods: {
      async getPokemon() {
        this.pokeError = false;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokeName}`);
        if (data.status === 200) {
          const response = await data.json();
          this.pokeInfo = response;
        } else if (data.status === 404) {
          this.pokeError = true;
          this.pokeInfo = null;
          this.errorMsg = await data.text();
        } else {
          console.log("Erro inesperado");
        }
      }
    },
    components: {
      PokeCard,
      PokeError,
    }
  });
</script>