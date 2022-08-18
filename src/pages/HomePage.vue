<template>   
    <div>        
        <header class="wrapper">
            <h1 id='title' @click="updatePokemons()"><span>{{ title }}</span></h1>
            <p id="intro">An illustrated encyclopedia with all you need to know about Pokemons</p> 
             
        </header>  
            <div class="wrapper" v-for="cp in portions.slice(0, currentPart)" :key="cp" >             
                <PokemonCard v-for="pokemon in pokemons.slice((100 * cp) - 100,cp  * 100)" class="pokemonItem"            
                    :id="pokemon.id"
                    :name="pokemon.name" 
                    :color="pokemon.color"
                    :types="pokemon.types"
                    :imageUrl="pokemon.imageUrl"
                    :isLoading="isLoading[cp - 1]"         
                    :key="pokemon.id"
                />
            </div>
        <footer> 
            <p v-if='isLoading[currentPart - 1]' id='isLoading'>Loading pokemons . <span id="waiting"></span></p>        
            <p v-if='!isLoading[currentPart - 1] && currentPart <= 7' id="seeMore" @click="seeMore">See more</p>            
        </footer>                          
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
           portions: [1,2,3,4,5,6,7,8,9] 
        }        
    },    
    created: async function(){         
        await this.listPokemons();         
        await this.completePokemons(101);
        this.waiting();         
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
        waiting(){            
            let order = 1;
            for(let i = 0 ; i <= 100 ; i++){
                window.setTimeout(function(){
                    if(order == 1) {
                        document.getElementById("waiting").innerHTML = ".&nbsp;&nbsp;";
                        order ++;
                    } else if(order == 2){
                        document.getElementById("waiting").innerHTML = ". .";
                        order ++;                    
                    } else {
                        document.getElementById("waiting").innerHTML = " &nbsp;&nbsp;&nbsp;";
                        order = 1;
                    }
                
                },500*i);
            }
            
        },
        seeMore(){
            this.incrementCurrentPart();
            this.completePokemons();
            this.incrementIsLoading();
        },
        ...mapActions(['updateTitle','listPokemons','completePokemons','incrementCurrentPart','incrementIsLoading'])
    },
    computed: {        
        ...mapState(['title','pokemons','isLoading','currentPart'])   
    }
}
</script>

<style scoped>
h1 {    
    color:black;       
}
.wrapper {
    display: grid;
    justify-content: center;    
}
footer { 
    margin-bottom: 1rem;
    display: flex;  
    justify-content: center;  
    margin-top: 2rem;          
}
#seeMore {
    background-color:lightgrey;
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 0.25rem;
}
#isLoading {
    margin-top: -2rem;    
}
@media screen and (orientation:portrait) {
    .wrapper {        
        grid-template-columns: repeat(2, 44vw);
        grid-gap: 4vw;
        margin-top: 4vw;        
    }    
    .pokemonItem {        
        border-radius: 5vw;
        padding: 4vw;			
    }    
    #title, #intro, #isLoading, footer p {					
        grid-column: 1/3;
    }    
    }
    @media screen and (orientation:landscape) {
    .wrapper {        
        grid-template-columns: repeat(4, 22vw);
        grid-gap: 2vw;
        margin-top: 2vw;                 
    }
    header, footer {					
        grid-column: 1/5;
    }
    .pokemonItem {        
        border-radius: 2vw;
        padding: 2vw;			
    }    
    #title, #intro, #isLoading, footer p {					
        grid-column: 1/5;
    }
    }    
</style>