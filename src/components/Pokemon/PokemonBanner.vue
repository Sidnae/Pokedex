<script>
export default {
    name: 'PokemonBanner',
    props: ['index','name','imageUrl','types','color']
}
</script>

<template>
    <div id='bannerWrapper' :class='color'>
        <header id='bannerHeader'>
            <p class='arrowWrapper'><router-link :to='`/`'><span class="material-icons">arrow_back</span></router-link></p>
            <h1>{{ name }}</h1><p class='pokemonIndex'>#{{ index }}</p>       
            <div class='typesWrapper'>
                <p v-for='type in types' :key="type" class='pokemonType'>{{ type }}</p>                
            </div>
            <div class='imgWrapper'><img :src='imageUrl' alt='Pokemon' class='pokemonImg'></div>            
        </header>        
    </div>
</template>

<style scoped>
    h1 {
        color: white;
    }
    #bannerWrapper {
        width:100%;                 
    }
    #bannerHeader {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        align-items: baseline;                
    }
    .pokemonIndex {
        font-weight: bold;
        color:white;
        font-size:1.2rem;
    }  
    .typesWrapper, .arrowWrapper, .imgWrapper {
        grid-column: 1/3;
    }
    .typesWrapper {        
        display: flex;
        flex-direction: row;
        justify-content: flex-start; 
        margin-top:1vw;       
    }    
    .typesWrapper p:last-child {
        margin-right: 0;
    }
    .arrowWrapper {
        margin-bottom: 1vw;
    }
    .pokemonIndex {
        text-align: right;
    }
    .imgWrapper {
        width:100%;
        display: flex;
        justify-content: center;        
    }       
    .material-icons {
        color:white;
    }
    @media screen and (orientation:portrait) {
    #bannerHeader {        
        padding:4vw;    
    }
    .typesWrapper p {        
        margin-right: 2vw;
    }
    .pokemonImg {
        width: 50%;        
    }
    .menuWrapper {        
        border-radius: 6vw 6vw 0 0;
        margin-top: -12vw;
    }
    .menuWrapper p {
        padding-top: 10vw;
        padding-left: 2vw;
        padding-right: 2vw;
    }
    }
    @media screen and (orientation:landscape) {
    #bannerHeader {        
        padding:1vw;    
    }
    .typesWrapper p {        
        margin-right: 1vw;
    }
    .pokemonImg {
        width: 10%;
    }
    .menuWrapper {        
        border-radius: 2vw 2vw 0 0;
        margin-top: -3vw;
    }
    .menuWrapper p {
        padding-top: 3vw;
        padding-left: 1vw;
        padding-right: 1vw;
    }
    }
</style>