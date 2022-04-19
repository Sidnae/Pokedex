<script>
export default {
    name: 'PokemonMenu',    
    props: ['activeMenu'],
    methods: {
        selectMenu(event){
            this.$emit('selectMenu', event)
        }
    }  
}
</script>

<template>
    <div class='menuWrapper'>
        <p class='activeMenu' id='about' @click='selectMenu'>About</p> 
        <p class='inactiveMenu' id='stats' @click='selectMenu'>Stats</p>
        <p class='inactiveMenu' id='evol' @click='selectMenu'>Evolution</p>
        <p class='inactiveMenu' id='moves' @click='selectMenu'>Moves</p>
    </div>
</template>

<style scoped>
    .menuWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: white;        
    }
    .activeMenu {
        text-decoration-line:underline; 
        text-decoration-color: rgb(95, 58, 244);
        text-underline-offset: 1rem; 
        text-decoration-thickness: 0.15rem;  
    }
    .inactiveMenu {
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
    .activeMenu {           
        text-underline-offset: 1rem;        
    }
    }
</style>