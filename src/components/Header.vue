<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <nav>
    <ul>
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="/pokemon">Buscar</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { Header } from '../types';

  export default defineComponent({
    data(): Header {
      return {
        title: "Pokedex - APP"
      }
    }
  })
</script>