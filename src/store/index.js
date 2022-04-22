import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Pokedex',
    pokemons: [],
    isLoading: true  
  },
  mutations: {
    MUTE_TITLE(state, payload){
      if(state.title == 'Pokedex'){
        state.title += payload;
      } else {
        state.title = 'Pokedex';
      }      
    } ,
    FEED_POKEMONS: async function(state){
      //Récupération id, nom, imageUrl de chaque pokemon :        
      try {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        let resJson = await res.json(); 
        resJson.results.forEach( (r) => {
          let id = r.url.slice(34).slice(0,-1);
          let imageUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/' + id + '.png?raw=true';
          state.pokemons.push({
            id: id,
            name: r.name,
            imageUrl: imageUrl,
            color: '',
            types: []
        }) 
    }); 
    } catch (error) {
        console.error(error);
    }        
    //Récupération des couleurs :
    for(let p of state.pokemons) {
        try {
            let res = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + p.id);
            let resJson = await res.json(); 
            p.color = resJson.color.name; 
        } catch (error) {
            console.error(error);
        }
    }
    //Récupération des types de chaque pokemon (ex: grass, fire, etc...):  
    for(let p of state.pokemons) {
        try {
            let types = [];	
            let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + p.id);
            let resJson = await res.json();
            resJson.types.forEach( (t) => {
                types.push(t.type.name);
            }) 
            p.types = types; 
        } catch (error) {
            console.error(error);
        }   
      }
      state.isLoading = false;      
    }
  },
  actions: {
    updateTitle(context, payload){
      context.commit('MUTE_TITLE',payload);
    } ,
    updatePokemons(context){
      context.commit('FEED_POKEMONS');
    }
  }
});