<template>
  <div class='wrapper'>
    <PokemonBanner
      :name="name" 
      :index="index"  
      :imageUrl="imageUrl" 
      :types="types"              
      :key="index"
    />
    <PokemonMenu
      :activeMenuEl="activeMenuEl"
      @selectedMenu="selectedMenu" 
    />    
  </div>
</template>

<script>
import PokemonBanner from '../components/Pokemon/PokemonBanner.vue'
import PokemonMenu from '../components/Pokemon/PokemonMenu.vue'
export default {
    name: 'PokemonPage',
    components: {
        PokemonBanner,
        PokemonMenu,
    },
    data(){
        return { 
          urlIndex: '',
          name: '',
          imageUrl: '',
          types: [],
          activeMenuEl: 'About'          
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
      this.activeLink = 'about';
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
      },            
      selectedMenu(event){
          console.log(event);
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