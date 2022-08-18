<script>
export default {
    name: 'PokemonMoves',
    props: {
        name: String
    }   
}
</script>

<template>
    <p>All information about the moves that <span class="pokemonName">{{ name }}</span> can use :
        <ul>
            <li>All techniques of attacks that <span class="pokemonName">{{ name }}</span> can use in a battle. Like all Pokemons, {{ name }} can use one move each turn.</li>
            <li>All the moves that <span class="pokemonName">{{ name }}</span> can use outside a battle, to remove obstacles or explore new areas</li>                       
        </ul>
    </p>    
</template>

<style scoped>
.pokemonName {
    text-transform: capitalize;
    font-weight: bold;   
}
ul {
    margin-left: 2rem;
    margin-top: 1rem;
}
</style>