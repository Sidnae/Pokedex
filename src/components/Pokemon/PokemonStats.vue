<script>
export default {
    name: 'PokemonStats',
    props: {
        name: String
    }    
}
</script>

<template>
    <p>All statistics about <span class="name">{{ name }}</span> :
        <ul>
            <li>Attacks and defenses of <span class="name">{{ name }}</span></li>
            <li>Special attacks and special defenses</li>
            <li>HP and speed</li>            
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