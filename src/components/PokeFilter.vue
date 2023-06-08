<template>
  <div class="card-filter">
    <div class="title" @click="toggleAccordion">
      <p>Filtro</p>
    </div>
    <transition name="accordion">
      <div class="card">
        <div v-if="isActive" class="all-filters">
          <div class="switch-container switch-column">
            <label class="switch-label" for="allTypes">Todos</label>
            <label class="switch">
              <input id="allTypes" type="checkbox" value="allTypes" v-model="allPokeTypes">
              <span class="slider round"></span>
            </label>
          </div>
          <div v-for="pokeType in pokeTypes" :key="pokeType" class="switch-container">
            <label class="switch-label" :for="pokeType">{{ pokeType }}</label>
            <label class="switch">
              <input :id="pokeType" type="checkbox" :value="pokeType" v-model="selectedTypes">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { pokeTypes } from '../utils/pokeTypes'

  export default defineComponent({
    data(): { isActive: boolean, pokeTypes: typeof pokeTypes, selectedTypes: string[], allPokeTypes: boolean } {
      return {
        isActive: false,
        pokeTypes,
        selectedTypes: [],
        allPokeTypes: true,
      }
    },
    watch: {
      selectedTypes(newValues) {
        console.log('log:', Object.values(newValues));
        console.log(this.selectedTypes);
      }
    },
    methods: {
      toggleAccordion() {
        this.isActive = !this.isActive;
      },
    }
  })
</script>

<style lang="css" scoped>
  
  .card-filter {
    display: flex;
    flex-direction: column;
    /* background-color: #282a36; */
    align-items: center;
    text-align: center;
    max-width: 900px;
    min-width: 400px;
    /* border-radius: 5px; */
    /* border: #282a36 1px solid; */
  }

  .title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    max-width: 860px;
    min-width: 400px;
    /* padding: 20px; */
    background-color: #282a36;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .card {
    padding: 0 20px 20px 20px;
  }

  .all-filters {
    display: flex;
    flex-wrap: wrap;
    background-color: #44475a;
    /* border: #2196F3 1px solid; */
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    /* margin: 0; */
    padding: 10px 0 10px 0;
    border: #282a36 1px solid;
  }

  .switch-container {
    min-width: 23.4%;
    display: flex;
    
    /* align-items: center; */
    /* margin: 20px; */
    padding: 6px;
    /* border: #2196F3 1px solid; */
    justify-content: right;
    color:#e1e1e1
  }

  .accordion-enter-active,
  .accordion-leave-active {
    transition: max-height 0.35s ease;
  }

  .accordion-enter,
  .accordion-leave-to {
    max-height: 0;
  }
</style>