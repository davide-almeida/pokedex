<template>
  <section class="content">
    <PokeList
      v-if="pokeData"
      :pokeData="pokeData"
    />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PokeList from "./PokeList.vue";

  export default defineComponent({
    data() {
      return {
        pokeData: null,
      }
    },
    components: {
      PokeList,
    },
    methods: {
      async getPokemons() {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=40&limit=10")
        const response = await data.json();
        this.pokeData = response;
      }
    },
    created() {
      this.getPokemons();
    }
  })
</script>