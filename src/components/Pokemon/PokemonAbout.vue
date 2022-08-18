<script>
export default {
    name: 'PokemonAbout',
    props: {        
        description: String, 
        number: String,       
        height: String,
        weight: String,
        color: String,
        egg_groups: String,
        types: String,
        abilities: String
    },
    computed: {
        fullHeight(){
            return this.height / 10;
        },
        fullWeight(){
            return this.weight / 10;
        }
    }
}
</script>

<template>
    <div class="detailsWrapper">
        <p class="description">{{ description }}</p>
        <p class="detailsTitle">Number</p><p>{{ number }}</p>
        <p class="detailsTitle">Height</p><p>{{ fullHeight }} m</p>
        <p class="detailsTitle">Weight</p><p>{{ fullWeight }} kg</p>
        <p class="detailsTitle">Color</p><p><span class="firtsCapitalize">{{ color }}</span></p>
        <p class="detailsTitle">Egg groups</p><p><span class="firtsCapitalize" v-for="e in egg_groups" :key="e">{{ e }}&nbsp;</span></p>        
        <p class="detailsTitle">Types</p><p><span class="firtsCapitalize" v-for="t in types" :key="t">{{ t }}&nbsp;</span></p>
        <p class="detailsTitle">Abilities</p><p><span class="firtsCapitalize" v-for="a in abilities" :key="a">{{ a }}&nbsp;</span></p>
    </div>  
</template>

<style scoped>
.detailsWrapper {
    display: grid;
    grid-template-columns: min-content auto;
}
.detailsWrapper p {
    line-height: 2rem;    
}
.description {
    grid-column: 1/3;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.2rem grey;    
}
.detailsTitle {
    font-weight: bold;
    margin-left: 1rem;
    margin-right: 2rem;
    white-space: nowrap;    
}
.name {
    text-transform: capitalize;    
    font-weight: bold;
}
ul {
    margin-left: 2rem;
    margin-top: 1rem;
}
.firtsCapitalize {
    text-transform: capitalize;
}
</style>