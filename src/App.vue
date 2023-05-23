<template>
  <form @submit.prevent="getPokemon">
    <label for="search">Busca</label>
    <input type="text" id="search" v-model="pokeName"/>
    <button type="submit">Buscar</button>
  </form>

  <p v-show="pokeError">Erro ao procurar pokemon =/</p>

  <div v-if="pokeInfo">
    <h1>{{ this.pokeInfo.name }}</h1>
    <span>Abilities:</span>
    <ul>
      <li v-for="item in this.pokeInfo.abilities" :key="item.ability.name">{{ item.ability.name }}</li>
    </ul>
    <h1>Imagem:</h1>
    <img :src="pokeInfo.sprites.other.home.front_default" alt="poke img">
  </div>
</template>

<style>
  img {
    max-width: 200px;
  }
</style>

<script>
  export default {
    data() {
      return {
        pokeName: "",
        pokeInfo: false,
        pokeError: false,
      }
    },
    methods: {
      async getPokemon() {
        try {
          this.pokeError = false
          this.pokeInfo = false
          const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokeName}`)
          const response = await data.json()
          this.pokeInfo = response
        } catch (error) {
          this.pokeError = true
        }
      }
    }
  }
</script>
