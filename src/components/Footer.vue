<template>
  <div class="footer-line"></div>
  <footer>
    <p class="footer-text">{{ title }}</p>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { Footer } from '../types';

  export default defineComponent({
    data(): Footer {
      return {
        title: "Pokedex"
      }
    }
  })
</script>