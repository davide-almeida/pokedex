<template>
    <div v-if="pokeInfo" class="pokemon-card" :class="pokeInfo.types[0].type.name">
      <div class="pokemon-header-card">
        <div class="poke-name-card">
          <h2>
            {{ pokeInfo.name.charAt(0).toUpperCase() }}{{ pokeInfo.name.slice(1).toLowerCase() }}
          </h2>
        </div>
        <div class="poke-icons-card">
          <span class="poke-icon" :class="pokeInfo.types[0].type.name + '-color'" v-for="item in pokeInfo.types" :key="item.type.name">
            <i :class="['fa-solid', pokeIcons[item.type.name]]"></i>
          </span>
        </div>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PokeIconsType, pokeIcons } from '../utils/icons.ts';
import type { PokemonInfo } from '../types';

export default defineComponent({
    data(): { pokeIcons: PokeIconsType } {
      return {
        pokeIcons,
      }
    },
    props: {
      pokeInfo: {
        type: Object as () => PokemonInfo,
      }
    },
  });
</script>
