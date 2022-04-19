<template>      
    <div class="wrapper">
        <h1 id='title'>Pokedex</h1>        
        <PokemonCard v-for="pokemon in pokemons" class="pokemonItem"
            :urlIndex="pokemon.index"
            :index="formatIndex(pokemon.index)"
            :name="majFirstLetter(pokemon.name)" 
            :color="pokemon.color"
            :types="majFirstLetterTab(pokemon.types)"
            :imageUrl="pokemon.imageUrl"          
            :key="pokemon.urlIndex"
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
        //Nombre de pokemons affichés :
        let limit = 151;
        //Fabrication du tableau d'objets Pokemons :
        for(let i = 0 ; i < limit ; i++){	
            this.pokemons.push({
                index: i + 1,
                name: '',
                imageUrl: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + (i + 1) + '.png?raw=true',
                color: '',
                types: []
            })
        }
        //Récupération du nom de chaque pokemon :
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(response => {	
            for(let i = 0 ; i < limit ; i++){
                this.pokemons[i].name = response.results[i].name;
            }
        })   
        .catch(error => console.error(error));
        //Récupération de la couleur de chaque pokemon :
        for(let i = 0 ; i < limit ; i++){
            fetch('https://pokeapi.co/api/v2/pokemon-species/' + (i + 1))
                .then(response => response.json())
                .then(response => {
                    this.pokemons[i].color = response.color.name; 
                })
                .catch(error => console.error(error));
        }
        //Récupération des types de chaque pokemon (ex: grass, fire, etc...):
        for(let i = 0 ; i < limit ; i++){            
            let types = [];	
            fetch('https://pokeapi.co/api/v2/pokemon/' + (i + 1))
            .then(response => response.json())
            .then(response => {	
                for (let j = 0 ; j < response.types.length ; j++){
                    types.push(response.types[j].type.name);
                }                    				  				
            })
            .catch(error => console.error(error));
            this.pokemons[i].types = types; 
        }
        //affichage des couleurs :
        for(let i = 0 ; i < limit ; i++){
            console.log('Log : ' + this.pokemons[0].color);
        }
    },
    methods: {
        majFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        majFirstLetterTab(tab) {
            tab = tab.map(element => element.charAt(0).toUpperCase() + element.slice(1)); 
            return tab;
        },
        formatIndex(index){
            while(index.toString().length < 3){
                index = '0' + index;
            }                       
            return index;
        }
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