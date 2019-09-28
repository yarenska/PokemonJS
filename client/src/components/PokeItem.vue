<template>
    <div>
      <router-link :to="pokemonLink">
        {{pokemon.name}}
      </router-link>
    </div>
</template>

<script>
export default {
    name: 'Poke Item',
    data() {
        return {}
    },
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    computed: {
        pokemonLink() {
            return `/${this.pokemon.national_id}`
        }
    }
}
</script>