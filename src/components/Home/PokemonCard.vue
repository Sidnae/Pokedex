<script>
export default {
    name: 'PokemonCard',     
    props: {        
        index: String,
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
        formatIndex(index){
            while(index.length < 3){
                index = '0' + index;
            }                       
            return index;
        }
    }
}
</script>

<template>
    <div  v-if='isLoading == false' :class='color'>
        <p class='index'>#{{ formatIndex(index) }}</p>
        <h2><router-link :to="`/pokemons/${index}`">{{ majFirstLetter(name) }}</router-link></h2>
        <div class='pokemonContentWrapper'>
            <div class='pokemonTypeWrapper'><p v-for='type in types' :key="type" class='pokemonType'>{{ majFirstLetter(type) }}</p></div>
            <img :src="imageUrl" alt="Pokemon" class='pokemonImg'>            
        </div>        
    </div>
</template>

<style scoped>
a {   
    color: white;
}
.index {
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
.index {
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
.index {
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