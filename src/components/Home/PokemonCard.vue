<script>
export default {
    name: 'PokemonCard',     
    props: {        
        id: String,
        name: String,
        imageUrl: String,
        types: Array,
        color: String,
        isLoading: {
            type: Boolean,
            default: false
        } 
    },
    methods: {
        majFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        formatid(id){
            while(id.length < 3){
                id = '0' + id;
            }                       
            return id;
        }
    }
}
</script>

<template>
    <div  v-if='isLoading == false' :class='color' id="id">
        <p class='id'>#{{ formatid(id) }}</p>
        <h2><router-link :to="`/pokemons/${id}`">{{ majFirstLetter(name) }}</router-link></h2>
        <div class='pokemonContentWrapper'>
            <div class='pokemonTypeWrapper'><p v-for='type in types' :key='type' class='pokemonType'>{{ majFirstLetter(type) }}</p></div>
            <img :src="`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${id}.png?raw=true`" :alt="`${name} photo`" class='pokemonImg' loading='lazy'>            
        </div>        
    </div>
</template>

<style scoped>
a {   
    color: white;
}
.id {
    width: 100%; 
    text-align: right;
    color: rgba(0, 0, 0, 0.1);
    font-weight: bold;    
}
.pokemonContentWrapper {
    display: flex;    
    justify-content: space-between;
}
.pokemonTypeWrapper {
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;    
    margin-top: 1.5vw;
}
@media screen and (orientation:portrait) {
.id {
    font-size: 1.5rem;
}
.pokemonType:last-child {
    margin-bottom:0;
}
.pokemonImg {
        width: 50%;
    }
}
@media screen and (orientation:landscape) {
.id {
    font-size:1.7rem;
    border-radius: 1.5rem; 
}
.pokemonType:last-child {
    margin-bottom:0;
}
.pokemonImg {
    width: 11vw;
}
}    
</style>