<template>
  <section class="search-page">
    <form class="search-form" @submit.prevent="getPokemon">
      <input type="text" id="search" class="search-input" v-model="pokeName"/>
      <button type="submit" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>

    <p v-show="pokeError">Erro ao procurar pokemon =/</p>

    <div v-if="pokeInfo" class="pokemon-card">
      <div class="pokemon-name">
        <h2><i :class="['fa-solid', pokeIcons[pokeInfo.types[0].type.name]]"></i> {{ pokeInfo.name }}</h2>
      </div>
      <div class="pokemon-data">
        <div class="pokemon-image">
          <img :src="pokeInfo.sprites.other.home.front_default" alt="poke img">
        </div>
        <div class="pokemon-abilities">
          <div class="title">
            <h3>Habilidades</h3>
          </div>
          <div class="list">
            <ul>
              <li v-for="item in pokeInfo.abilities" :key="item.ability.name">{{ item.ability.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { PokemonInfo } from '../types';
  import type { PokeIcons } from '../types';
  import { pokeIcons } from './icons'

  export default defineComponent({
    data(): { pokeInfo: PokemonInfo | null, pokeError: boolean, pokeName: string, pokeIcons: PokeIcons } {
      return {
        pokeName: "",
        pokeInfo: null,
        pokeError: false,
        pokeIcons,
      }
    },
    methods: {
      async getPokemon() {
        try {
          this.pokeError = false;
          this.pokeInfo = null;
          const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokeName}`);
          const response = await data.json();
          this.pokeInfo = response;
        } catch (error) {
          this.pokeError = true;
        }
      }
    },
  });
</script>