<template>      
    <div class="itemsWrapper">
        <h1 id='title'>Pokedex</h1>        
        <PokemonCard v-for="pokemon in pokemons" class="pokemonItem"
            :name="pokemon.name" 
            :index="pokemon.index"  
            :imageUrl="pokemon.imageUrl" 
            :types="pokemon.types"           
            :key="pokemon.index"
        />              
    </div>  
</template>

<script>
import PokemonCard from '../components/Home/PokemonCard.vue'

export default {
    name: 'HomePage',
    components: {
        PokemonCard
    },
    data(){
        return {            
            pokemons:[]            
        }        
    },
    created(){				
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(response => {	
            for(let i = 0 ; i < response.results.length ; i++){
                let types = [];		  				
                fetch('https://pokeapi.co/api/v2/pokemon/' + (i + 1))
                .then(response => response.json())
                .then(response => {	
                    for (let j = 0 ; j < response.types.length ; j++){
                        types.push(this.majFirstLetter(response.types[j].type.name));
                        //console.log('Pokemon ' + ( i + 1) + ':' + response.types[j].type.name + '\n');
                    }				  				
                })
                .catch(error => console.error(error));	  			
                
                this.pokemons.push({
                    index: this.formatIndex((i + 1).toString()),
                    name: this.majFirstLetter(response.results[i].name),
                    imageUrl: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + (i + 1) + '.png?raw=true',
                    types: types
                });
            }               
        })
        .catch(error => console.error(error));
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

<style scoped>
h1 {
    font-size: 2rem;
}
.pokemonItem {
    background-color: #46D0A7;    			
}
.itemsWrapper {
    justify-content: center;    
}    
@media screen and (orientation:portrait) {
    .pokemonItem {        
        border-radius: 5vw;
        padding: 4vw;			
    }
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
    .pokemonItem {        
        border-radius: 2vw;
        padding: 2vw;			
    }
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