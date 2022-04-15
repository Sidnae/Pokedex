<template>
  <div class='wrapper'>
    <PokemonBanner
      :name="name" 
      :index="index"  
      :imageUrl="imageUrl" 
      :types="types"           
      :key="index"
    />    
  </div>
</template>

<script>
import PokemonBanner from '../components/Pokemon/PokemonBanner.vue'
export default {
    name: 'PokemonPage',
    components: {
        PokemonBanner
    },
    data(){
        return { 
          urlIndex: '',
          name: '',
          imageUrl: '',
          types: []           
        }        
    },
    created(){      
      this.urlIndex = this.$route.params.urlIndex;            				
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.$route.params.urlIndex)
      .then(response => response.json())
      .then(response => {	
        this.name = this.majFirstLetter(response.forms[0].name);
        for (let i = 0 ; i < response.types.length ; i++){
            this.types.push(this.majFirstLetter(response.types[i].type.name));            
        }	
        this.imageUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + this.urlIndex + '.png?raw=true';
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
    },
    computed: {
      index(){
        return this.formatIndex(this.urlIndex);
      }
    }
}
</script>

<style scoped>
 
</style>