<script>
export default {
    name: 'PokemonCard',
    props: ['index','name','imageUrl']
}
</script>

<template>
    <div>
        <p class='index'>#{{ index }}</p>
        <h2><router-link :to="`/pokemons/${name}`">{{ name }}</router-link></h2>
        <div class='pokemonImgWrapper'><img :src="imageUrl" class='pokemonImg'></div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
p, h2 {
	color: white;
}
.index {
    width: 100%; 
    text-align: right;
    color: rgba(0, 0, 0, 0.1);
    font-weight: bold;
}
.pokemonImgWrapper {
    display: flex;
    justify-content: flex-end;
}
@media screen and (orientation:portrait) {
.pokemonImg {
        width: 50%;
    }
}
@media screen and (orientation:landscape) {
.pokemonImg {
        width: 11vw;
    }
}    
</style>