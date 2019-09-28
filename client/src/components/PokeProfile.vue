<template>
    <div id="cards">  
      <figure v-bind:class=myClass>
        <div class="card__image-container">
          <img v-bind:src="pokemon.image_url" v-bind:alt="pokemon.name" class="card__image">   
        </div>
        <figcaption class="card__caption">
          <h1 class="card__name">{{pokemon.name}}</h1>
          <h3 class="card__type">{{type}}</h3>
          <table class="card__stats">
            <tbody>
              <tr>
                <th>HP</th>
                <td>{{pokemon.base.HP}}</td>
              </tr>
              <tr>
                <th>Attack</th>
                <td>{{pokemon.base.Attack}}</td>
              </tr>
              <tr>
                <th>Defense</th>
                <td>{{pokemon.base.Defense}}</td>
              </tr>
              <tr>
                <th>Special Attack</th>
                <td>{{pokemon.base["Sp. Attack"]}}</td>
              </tr>
              <tr>
                <th>Special Defense</th>
                <td>{{pokemon.base["Sp. Defense"]}}</td>
              </tr>
              <tr>
                <th>Speed</th>  
                <td>{{pokemon.base.Speed}}</td>
              </tr>
            </tbody>
          </table>
        <div class="card__abilities">
          <h4 class="card__ability">
            <span class="card__label">Method</span>
            {{pokemon.evolutions[0]["method"]}}
          </h4>
          <h4 class="card__ability">
            <span class="card__label">To</span>
            {{pokemon.evolutions[0]["to"]}}
          </h4>
          </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      myClass: "",
      pokemon: {},
      type: ""
    }
  },
  created(){
    axios.get(`http://localhost:3000/${this.$route.params.id}`)
    .then(resp => {
      console.log(resp)
      this.pokemon = resp.data[0]
      if(resp.data[0].types.indexOf("fire") > -1){
        this.myClass = "card card--fire"
        this.type = "fire"
      }
      else{
        this.myClass = "card card--grass"
        this.type = "grass"
      }
      console.log(resp.data[0].base.Sp. Attack)
      })
    .catch(err => console.log(err))
  }
}
</script>



<style scoped lang="scss">
@import "../styles/style.scss"
</style>