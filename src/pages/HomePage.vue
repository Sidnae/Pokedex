<template>
  <div>    
    <div class="itemsWrapper">
        <h1 id='title'>Pokedex</h1>        
        <PokemonCard v-for="pokemon in pokemonData" class="pokemonItem"
            :name="pokemon.name" 
            :index="pokemon.index"  
            :imageUrl="pokemon.imageUrl"            
            :key="pokemon.index"
        />              
    </div>
  </div>
</template>

<script>
import PokemonCard from '../components/PokemonCard.vue'

export default {
    name: 'HomePage',
    components: {
        PokemonCard
    },
    data(){
        return {            
            pokemonData:[]            
        }        
    },
    created(){				
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(response => {		  			
            for(let i = 0 ; i < response.results.length ; i++){
                this.pokemonData.push({
                    index: i + 1,
                    name: this.majFirstLetter(response.results[i].name),
                    imageUrl: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + (i + 1) + '.png?raw=true'
                });
            }
            console.log(this.pokemonData);
        })
        .catch(error => console.error(error));
    },
    methods: {
        majFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }    
}
</script>

<style scoped>
h1 {
    font-size: 2rem;
}
.pokemonItem {
    background-color: #46D0A7;
    border-radius: 2rem;
    padding: 2rem;			
}
.itemsWrapper {
    justify-content: center;    
}    
@media screen and (orientation:portrait) {
    .itemsWrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4vw	        
    }
    #title {					
        grid-column: 1/3;
    }
    }
    @media screen and (orientation:landscape) {
    .itemsWrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2vw
    }
    #title {					
        grid-column: 1/5;
    }
    }    
</style>