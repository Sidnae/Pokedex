<template>      
    <div class="wrapper">
        <h1 id='title'>Pokedex</h1>
        <p v-if='isLoading'>Chargement...</p>             
        <PokemonCard v-for="pokemon in pokemons" class="pokemonItem"            
            :index="pokemon.index"
            :name="pokemon.name" 
            :color="pokemon.color"
            :types="pokemon.types"
            :imageUrl="pokemon.imageUrl"
            :isLoading="isLoading"         
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
            isLoading: true,           
            pokemons:[]   
        }        
    },    
    created: async function(){              
        //Récupération index, nom, imageUrl de chaque pokemon :
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())        
        .then(response => { 
            response.results.forEach( (r) => {
                this.pokemons.push({
                    index: this.extractIndex(r.url),
                    name: r.name,
                    imageUrl: this.generateImageUrl(this.extractIndex(r.url)),
                    color: '',
                    types: []
                }) 
            });         
        })  
        .catch(error => console.error(error));        
        for(let p of this.pokemons) {
            await fetch('https://pokeapi.co/api/v2/pokemon-species/' + p.index)
                .then(response => response.json())
                .then(response => {
                    p.color = response.color.name; 
                })
                .catch(error => console.error(error));
        }
        //Récupération des types de chaque pokemon (ex: grass, fire, etc...):        
        for(let p of this.pokemons) {
            let types = [];	
            await fetch('https://pokeapi.co/api/v2/pokemon/' + p.index)
            .then(response => response.json())
            .then(response => {	
                response.types.forEach( (t) => {
                    types.push(t.type.name);
                })                 				  				
            }) 
            .catch(error => console.error(error));
            p.types = types; 
        }        
        //Passage de isLoading à false pour afficher le contenu et masquer le message d'attente :
        this.isLoading = false;    
    },        
    methods: {
        extractIndex(url){
			url = url.slice(34).slice(0,-1);
			return url;
		},
        generateImageUrl(index){
            let imageUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + index + '.png?raw=true';
            return imageUrl;
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