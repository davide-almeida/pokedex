<template>
  <section class="content">
    <PokeList
      v-if="pokeData"
      :pokeData="pokeData"
    />
    <ScrollTopButton />
    <div v-if="isLoading" class="loading"><img src="../../assets/loading.gif" alt="loading" /></div>
    <div v-if="!pokeData && !isLoading" class="error">Erro ao carregar dados da API</div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { pokeDataType } from '../../types';
  import PokeList from "../../components/PokeList.vue";
  import { getPokemons } from "../../services/pokemons";
  import ScrollTopButton from '../../components/ScrollTopButton.vue';

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
      ScrollTopButton,
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
      },
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