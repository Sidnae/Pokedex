<script>
export default {
    name: 'PokemonBanner',
    props: ['index','name','imageUrl','types']
}
</script>

<template>
    <div class='bannerWrapper'>
        <p>{{ name }}</p><p>{{ index }}</p>        
        <div class='typesWrapper'>
            <p v-for='type in types' :key="type" class='pokemonType'>{{ type }}</p>
            <div class='imgWrapper'><img :src='imageUrl' alt='Pokemon' class='pokemonImg'></div>
        </div>
    </div>
</template>

<style scoped>
    .bannerWrapper {
        display: grid;
        grid-template-columns: auto auto;
    }
    .typesWrapper {
        grid-column: 1/3;
    }
    .imgWrapper {
        width:100%;
        display: flex;
        justify-content: center;
    }
    .pokemonImg {
        width: 50%;
    }
</style>