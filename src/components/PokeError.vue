<template>
  <div class="error">
    <p class="msg">Pokemon não encontrado</p>
    <p>{{ errorMsg }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      errorMsg: {
        type: String,
      }
    }
  })
</script>