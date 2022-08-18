<script>
export default {
    name: 'PokemonEvol',
    props: {
        name: String
    }  
}
</script>

<template>
    <p>Everything about the evolution chain of <span class="name">{{ name }}</span> :
        <ul>
            <li>New forms of <span class="name">{{ name }}</span></li>
            <li>Evolution family of <span class="name">{{ name }}</span></li>
            <li>Levels and conditions for its evolutions</li>            
        </ul>
    </p>    
</template>

<style scoped>
.name {
    text-transform: capitalize;    
    font-weight: bold;
}
ul {
    margin-left: 2rem;
    margin-top: 1rem;
}
</style>