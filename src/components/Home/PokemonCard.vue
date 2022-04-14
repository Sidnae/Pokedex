<script>
export default {
    name: 'PokemonCard',
    props: ['index','name','imageUrl','types']
}
</script>

<template>
    <div>
        <p class='index'>#{{ index }}</p>
        <h2><router-link :to="`/pokemons/${index}`">{{ name }}</router-link></h2>
        <div class='pokemonContentWrapper'>
            <div class='pokemonTypeWrapper'><p v-for='type in types' :key="type" class='pokemonType'>{{ type }}</p></div>
            <img :src="imageUrl" alt="Pokemon" class='pokemonImg'>            
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
p, h2 {
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
    margin-top: 1vw;
}
.pokemonType {
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;          
}
@media screen and (orientation:portrait) {
.index {
    font-size: 1.5rem;
}
.pokemonType {
    padding: 3vw 1.5vw 3vw 1.5vw; 
    border-radius: 1.5rem; 
    margin-bottom:2vw;
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
    font-size:2rem;
    border-radius: 1.5rem; 
}
.pokemonType {
    padding: 1vw 1.5vw 1vw 1.5vw; 
    border-radius: 2rem; 
    margin-bottom:1vw;
}
.pokemonType:last-child {
    margin-bottom:0;
}
.pokemonImg {
        width: 11vw;
    }
}    
</style>