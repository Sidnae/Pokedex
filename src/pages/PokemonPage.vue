<template>
  <div>
    <h1>Pokemon</h1>    
    <p>{{ title }}</p>
  </div>
</template>

<script>


export default {
    data() {
      return {
        // title: 'Pokemon name'
      }
    },
    computed: {
      title() {
        return this.$route.params.name;
      }
    },
    created() {

    },
    methods: {
     
    },
    components: {
    }
}
</script>

<style scoped>

</style>