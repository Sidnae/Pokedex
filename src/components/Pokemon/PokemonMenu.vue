<script>
export default {
    name: 'PokemonMenu',    
    props: ['activeMenuEl'],
    methods: {
        selectedMenu(event){
            this.$emit('selectedMenu', event.target.id)
        }
    }  
}
</script>

<template>
    <div class='menuWrapper'>
        <p v-if="activeMenuEl == 'about'"><span class='activeMenuEl' id='about'>About</span></p>
        <p v-else><span class='inactiveMenuEl' id='about'>About</span></p>

        <p v-if="activeMenuEl == 'stats'" ><span class='activeMenuEl' id='stats'>Stats</span></p>        
        <p v-else><span class='inactiveMenuEl' id='stats' @click="$emit('selectedMenu', $event.target.id)">Stats</span></p>

        <p v-if="activeMenuEl == 'evol'"><span class='activeMenuEl' id='evol'>Evolution</span></p>
        <p v-else><span class='inactiveMenuEl' id='evol'>Evolution</span></p>

        <p v-if="activeMenuEl == 'moves'"><span class='activeMenuEl' id='moves'>Moves</span></p>
        <p v-else><span class='inactiveMenuEl' id='moves'>Moves</span></p>     
    </div>
</template>

<style scoped>
    .menuWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: white;        
    }
    .activeMenuEl {
        text-decoration-line:underline; 
        text-decoration-color: rgb(95, 58, 244);
        text-underline-offset: 1rem; 
        text-decoration-thickness: 0.15rem;  
    }
    .inactiveMenuEl {
        color: gray;
    }
    @media screen and (orientation:portrait) {    
    .menuWrapper {        
        border-radius: 6vw 6vw 0 0;
        margin-top: -12vw;
    }
    .menuWrapper p {
        padding-top: 10vw;
        padding-left: 2vw;
        padding-right: 2vw;  
        padding-bottom: 5vw;
    }    
    }
    @media screen and (orientation:landscape) {    
    .menuWrapper {        
        border-radius: 2vw 2vw 0 0;
        margin-top: -3vw;
    }
    .menuWrapper p {
        padding-top: 3vw;
        padding-left: 1vw;
        padding-right: 1vw;
    }
    .activeMenuEl {           
        text-underline-offset: 1rem;        
    }
    }
</style>