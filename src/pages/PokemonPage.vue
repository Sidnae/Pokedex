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
          index: 0,
          name: '',
          imageUrl: '',
          types: [],
          activeMenu: 'about',
          color: ''         
        }        
    },
    created(){
      //récupération de l'url à afficher :         
      this.index = this.$route.params.index; 
      //Récupération des données Pokemon : nom et types           				
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.index)
      .then(response => response.json())
      .then(response => {	
        this.name = response.forms[0].name;
        for (let i = 0 ; i < response.types.length ; i++){
            this.types.push(response.types[i].type.name);            
        }	
        this.imageUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + this.index + '.png?raw=true';
      })
      .catch(error => console.error(error));
      //Récupération de la couleur :
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + this.index)
        .then(response => response.json())
        .then(response => {
            this.color = response.color.name; 
        })
        .catch(error => console.error(error));

      //Par défaut la page affiche l'onglet 'about' :
      this.activeLink = 'about';      
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