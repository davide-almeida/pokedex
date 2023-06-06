<template>
  <section class="search-page">
    <form class="search-form" @submit.prevent="getPoke">
      <input type="text" id="search" class="search-input" v-model="pokeName"/>
      <button type="submit" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
      <button @click.prevent="rollDice" class="search-dice-button"><i class="fa-solid fa-dice"></i></button>
    </form>

    <PokeError
      v-if="pokeError"
      :errorMsg="errorMsg"
    />

    <div v-if="isLoading" class="loading"><img src="../../assets/loading.gif" alt="loading" /></div>

    <PokeCard
      v-if="pokeInfo"
      :pokeInfo="pokeInfo"
    />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { getPokemon } from '../../services/pokemons';
  import type { PokemonInfo } from '../../types';
  import PokeCard from "../../components/PokeCard.vue";
  import PokeError from "../../components/PokeError.vue"

  export default defineComponent({
    data(): { pokeInfo: PokemonInfo | null, pokeError: boolean, pokeName: string, errorMsg: string, isLoading: boolean } {
      return {
        pokeName: "",
        pokeInfo: null,
        pokeError: false,
        errorMsg: "",
        isLoading: false,
      }
    },
    methods: {
      async getPoke() {
        try {
          this.pokeInfo = null;
          this.isLoading = true;
          this.pokeError = false;
          const pokemon = await getPokemon(this.pokeName);
          this.pokeInfo = pokemon;
          this.isLoading = false;
        } catch (error) {
          this.pokeError = true;
          this.pokeInfo = null;
          if (error instanceof Error) {
            this.errorMsg = error.message;
          } else {
            this.errorMsg = "Ocorreu um erro desconhecido.";
          }
        }
      },
      rollDice() {
        const randomNumber = Math.floor(Math.random() * 1010) + 1;
        this.pokeName = randomNumber.toString();
        this.getPoke();
      },
    },
    components: {
      PokeCard,
      PokeError,
    },
    created() {
      // Verificar outra forma de rolar a página para o topo (provavelmente no CSS)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  });
</script>