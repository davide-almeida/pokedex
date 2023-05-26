<template>
  <section class="content">
    <h1>{{ title }}</h1>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { Home } from '../types';

  export default defineComponent({
    data(): Home {
      return {
        title: "Página inicial"
      }
    }
  })
</script>