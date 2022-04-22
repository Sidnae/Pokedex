<template>      
    <div class="wrapper">
        <!-- <h1 id='title' @click="updateTitle(' !!')"><span>{{ title }}</span></h1> -->
        <h1 id='title' @click="updatePokemons()"><span>{{ title }}</span></h1>
        <p v-if='isLoading'>Chargement des pokemons...</p>             
        <PokemonCard v-for="pokemon in pokemons" class="pokemonItem"            
            :id="pokemon.id"
            :name="pokemon.name" 
            :color="pokemon.color"
            :types="pokemon.types"
            :imageUrl="pokemon.imageUrl"
            :isLoading="isLoading"         
            :key="pokemon.id"
        />                           
    </div>
</template>

<script>
import PokemonCard from '../components/Home/PokemonCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'HomePage',
    components: {
        PokemonCard
    },
    data(){
        return { 
            
        }        
    },    
    created: async function(){         
        await this.updatePokemons();            
    },        
    methods: {
        extractid(url){
			url = url.slice(34).slice(0,-1);
			return url;
		},
        generateImageUrl(id){
            let imageUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + id + '.png?raw=true';
            return imageUrl;
        },
        ...mapActions(['updateTitle','updatePokemons'])
    },
    computed: {
        ...mapState(['title','pokemons','isLoading'])
    }  
}
</script>

<style scoped>
h1 {    
    color:black;
}
.wrapper {
    justify-content: center;    
}    
@media screen and (orientation:portrait) {
    .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 44vw);
        grid-gap: 4vw;
        margin-top: 4vw;        
    }
    .pokemonItem {        
        border-radius: 5vw;
        padding: 4vw;			
    }    
    #title {					
        grid-column: 1/3;
    }
    }
    @media screen and (orientation:landscape) {
    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 22vw);
        grid-gap: 2vw;
        margin-top: 2vw;          
    }
    .pokemonItem {        
        border-radius: 2vw;
        padding: 2vw;			
    }    
    #title {					
        grid-column: 1/5;
    }
    }    
</style>