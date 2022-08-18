<template>
  <div class='wrapper'>
    <PokemonBanner
      :name='name'
      :index='index' 
      :imageUrl='imageUrl' 
      :types='types'
      :color='color'                 
      :key='index'
    />
    <PokemonMenu
      :activeMenu='activeMenu'
      @selectMenu='selectMenu'
    /> 
    <div id='main'>
      
      <PokemonAbout  
      v-if='activeMenu == "about"'
      :description='description'
      :number='index'
      :height='height'
      :weight='weight' 
      :egg_groups='egg_groups'
      :color='color'
      :types='types'
      :abilities='abilities'
      />
      <PokemonStats v-if='activeMenu == "stats"'
      :name='name'
       />
      <PokemonEvol v-if='activeMenu == "evol"' 
      :name='name'
      />
      <PokemonMoves v-if='activeMenu == "moves"' 
      :name='name'
      />      
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
import { mapState, mapActions } from 'vuex'
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
          index: 0,
          name: '',
          imageUrl: '',
          types: '',
          activeMenu: '',
          color: '',
          description: '',
          egg_groups: [],
          height: '',
          weight: ''
        }        
    },
    created() {  
      this.index = this.$route.params.index;      
      this.updateCurrentPokemon(this.index);      
      this.name = this.currentPokemon.name;
      this.imageUrl = this.currentPokemon.imageUrl;
      this.types = this.currentPokemon.types;
      this.color = this.currentPokemon.color;  
      this.description = this.currentPokemon.description;      
      this.height = this.currentPokemon.height;
      this.weight = this.currentPokemon.weight; 
      this.color = this.currentPokemon.color; 
      this.egg_groups = this.currentPokemon.egg_groups; 
      this.types = this.currentPokemon.types;
      this.abilities = this.currentPokemon.abilities;
      this.activeMenu = 'about';      
      this.activeLink = 'about'; 
      this.description = this.currentPokemon.description;
    },    
    methods: {          
      selectMenu(event){ 
        let menuStr = event.target.id;
        let menuEl = document.getElementById(menuStr);        
        if(menuStr != this.activeMenu){
          //désactiver tout autre menu actif puis activer le menu cliqué :
          document.getElementsByClassName('activeMenu')[0].className = 'inactiveMenu';          
          menuEl.className = 'activeMenu';
        }  
        this.activeMenu = menuStr;
      },
      ...mapActions(['updateCurrentPokemon'])
    },
    computed: {
        ...mapState(['pokemons','currentPokemon'])
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