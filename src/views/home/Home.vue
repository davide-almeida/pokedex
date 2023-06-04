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
  import PokeList from "../../components/PokeList.vue";
  import { getPokemons } from "../../services/pokemons.ts";

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
      async listPokemons(limit: number, offset: number) {
        const data = await getPokemons(limit, offset);
        this.pokeData = data;
        // console.log('next', this.pokeData.next);
        // console.log('previous', this.pokeData.previous);
      }
    },
    created() {
      this.listPokemons(10, 0);
    }
  })
</script>