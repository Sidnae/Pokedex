<template>
  <div>
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
          index: '',
          name: '',
          imageUrl: '',
          types: []           
        }        
    },
    created(){      
      this.index = this.$route.params.index;            				
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.unformatIndex(this.$route.params.index))
      .then(response => response.json())
      .then(response => {	
        this.name = this.majFirstLetter(response.forms[0].name);
        for (let i = 0 ; i < response.types.length ; i++){
            this.types.push(this.majFirstLetter(response.types[i].type.name));
            //console.log('Pokemon ' + ( index) + ':' + response.types[i].type.name + '\n');
        }	
        this.imageUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + this.unformatIndex(this.index) + '.png?raw=true';
      })
      .catch(error => console.error(error));	  
    },
    methods: {
      unformatIndex(index)     {
        return parseInt(index).toString();
      },
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

</style>