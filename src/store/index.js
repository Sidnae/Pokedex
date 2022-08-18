import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'The Pokedex',
    pokemons: [],
    isLoading: [true],
    currentPokemon: {},
    currentPart:1  
  },
  mutations: {
    MUTE_TITLE(state, payload){
      if(state.title == 'Pokedex'){
        state.title += payload;
      } else {
        state.title = 'Pokedex';
      }      
    } ,
    UPDATE_CURRENT_POKEMON(state, payload){
      state.currentPokemon = state.pokemons[parseInt(payload, 10) - 1]      
    },
    INCREMENT_CURRENT_PART(state){
      state.currentPart++;      
    },
    LIST_POKEMONS: async function(state){
      //Récupération id, nom, imageUrl de chaque pokemon :        
      try {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + 898);
        let resJson = await res.json(); 
        resJson.results.forEach( (r) => {
          let id = r.url.slice(34).slice(0,-1);          
          state.pokemons.push({
            id: id,
            name: r.name,            
            color: '',
            types: [],
            description: '',
            egg_groups: [],
            abilities: []
          }) 
      }); 
      } catch (error) {
          console.error(error);
      }
    },
    COMPLETE_POKEMONS: async function(state) {      
    //Retrieve colors, description, egg_groups :
    for(let i = state.currentPart - 1; i < state.currentPart * 100 ; i++) {
        try {
            let res = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + (i + 1));
            let resJson = await res.json(); 
            state.pokemons[i].color = resJson.color.name; 
            //find position of english description :
            let flavorTextIndex = resJson.flavor_text_entries.map(element => {return element.language.name}).indexOf('en');             
            let description = resJson.flavor_text_entries[flavorTextIndex].flavor_text;             
            description = description.replace("\n"," ");
            description = description.replace("\f"," ");
            description = description.replace("POKéMON","Pokemon");
            state.pokemons[i].description = description; 
            let egg_groups = []           ;
            resJson.egg_groups.forEach( (e) => {
              egg_groups.push(e.name);
            }) 
            state.pokemons[i].egg_groups = egg_groups;            
        } catch (error) {
            console.error(error);
        }
    }
    //Retrieve types, height, weight, abilities :  
    for(let i = state.currentPart - 1; i < state.currentPart * 100 ; i++) {
        try {            
            let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + (i + 1));
            let resJson = await res.json();
            //types :
            let types = [];	
            resJson.types.forEach( (t) => {
                types.push(t.type.name);
            }) 
            state.pokemons[i].types = types;
            //abitilites :
            let abilities = [];	
            resJson.abilities.forEach( (a) => {
                abilities.push(a.ability.name);
            }) 
            state.pokemons[i].abilities = abilities;
            //height, weight :
            state.pokemons[i].height = resJson.height;
            state.pokemons[i].weight = resJson.weight;
        } catch (error) {
            console.error(error);
        }   
      }
      state.isLoading[state.currentPart - 1] = false;      
    },
    INCREMENT_ISLOADING(){
      this.state.isLoading.push(true);
    }    
  },
  actions: {
    updateTitle(context, payload){
      context.commit('MUTE_TITLE',payload);
    } ,
    listPokemons(context){
      context.commit('LIST_POKEMONS');
    },
    completePokemons(context){
      context.commit('COMPLETE_POKEMONS');
    },
    updateCurrentPokemon(context,payload){
      context.commit('UPDATE_CURRENT_POKEMON',payload);
    },
    incrementCurrentPart(context,payload){
      context.commit('INCREMENT_CURRENT_PART',payload);
    },
    incrementIsLoading(context){
      context.commit('INCREMENT_ISLOADING');
    }
  }
});