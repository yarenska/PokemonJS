<template>
  <div id="app">
    <div class="tag-group">
      <el-tag
          v-for="pokemon in pokemons"
          :key="pokemon.national_id"
          :type="pokemon.name"
          effect="plain">
          <poke-item :pokemon=pokemon></poke-item>
        </el-tag>
    </div>
  </div>
</template>

<script>
import PokeItem from './PokeItem.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    PokeItem
  },
  data() {
    return {
      pokemons: []
    }
  },
  created() {
    axios.get("http://localhost:3000")
    .then(res => this.pokemons = res.data)
    .catch(err => {console.log(err)})
  }
}
</script>

<style>
div {
    display: flex;
    justify-content: center;
}
</style>