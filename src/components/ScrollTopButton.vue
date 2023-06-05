<template>
  <button class="scroll-top-button" v-show="showScrollTopButton" @click="scrollTop">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        showScrollTopButton: false,
      }
    },
    methods: {
      scrollTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      checkScrollTop() {
        this.showScrollTopButton = window.scrollY > 100;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.checkScrollTop);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.checkScrollTop);
    },
  })
</script>