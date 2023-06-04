<template>
  <section class="content">
    <PokeList
      v-if="pokeData"
      :pokeData="pokeData"
    />
    <div v-if="isLoading">Carregando...</div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { pokeDataType } from '../../types.ts';
  import PokeList from "../../components/PokeList.vue";
  import { getPokemons } from "../../services/pokemons.ts";

  export default defineComponent({
    data(): { pokeData: pokeDataType | null, isLoading: boolean, apiUrl: string} {
      return {
        pokeData: null,
        isLoading: false,
        apiUrl: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
      }
    },
    components: {
      PokeList,
    },
    methods: {
      async listPokemons() {
        try {
          this.isLoading = true;
          const data = await getPokemons(this.apiUrl);
          this.pokeData = data;
          this.isLoading = false;
        } catch (error) {
          console.log('Erro ao buscar dados da API:', error);
          this.isLoading = false;
        }
      },
      async loadMorePokemons() {
        if (this.pokeData && this.pokeData.next && !this.isLoading) {
          this.apiUrl = this.pokeData.next;
          await this.listPokemons();
        }
      },
      handleScrool() {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight) {
          this.loadMorePokemons();
        }
      }
    },
    mounted() {
      this.listPokemons();
      window.addEventListener('scroll', this.handleScrool);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScrool);
    }
  })
</script>