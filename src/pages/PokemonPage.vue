<template>
  <div class='wrapper'>
    <PokemonBanner
      :name='name'
      :index='index' 
      :imageUrl='imageUrl' 
      :types='types'              
      :key='index'
    />
    <PokemonMenu
      :activeMenu='activeMenu'
      @selectMenu='selectMenu'
    /> 
    <div id='main'>
      <PokemonAbout v-if='activeMenu == "about"' />
      <PokemonStats v-if='activeMenu == "stats"' />
      <PokemonEvol v-if='activeMenu == "evol"' />
      <PokemonMoves v-if='activeMenu == "moves"' />
    </div>
  </div>
</template>

<script>
import PokemonBanner from '../components/Pokemon/PokemonBanner.vue'
import PokemonMenu from '../components/Pokemon/PokemonMenu.vue'
import PokemonAbout from '../components/Pokemon/PokemonAbout.vue'
import PokemonStats from '../components/Pokemon/PokemonStats.vue'
import PokemonEvol from '../components/Pokemon/PokemonEvol.vue'
import PokemonMoves from '../components/Pokemon/PokemonMoves.vue'
export default {
    name: 'PokemonPage',
    components: {
        PokemonBanner,
        PokemonMenu,
        PokemonAbout,
        PokemonStats,
        PokemonEvol,
        PokemonMoves
    },
    data(){
        return { 
          urlIndex: '',
          name: '',
          imageUrl: '',
          types: [],
          activeMenu: 'about'          
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
      selectMenu(event){ 
        let menuStr = event.target.id;
        let menuEl = document.getElementById(menuStr);        
        if(menuStr != this.activeMenu){
          //désactiver tout autre menu actif puis activer le menu cliqué :
          document.getElementsByClassName('activeMenu')[0].className = 'inactiveMenu';          
          menuEl.className = 'activeMenu';
        }  
        this.activeMenu = menuStr;
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
@media screen and (orientation:portrait) {
  #main {
    padding: 2vw;
  }
}
@media screen and (orientation:landscape) {
  #main {
    padding: 1vw;
  }
} 
</style>