<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
	padding: 0;
  font-family: Ubuntu, sans-serif;
}
@media screen and (orientation:portrait) {
  #app {
    margin: 4vw;
  }
}
@media screen and (orientation:landscape) {
  #app {
    margin: 2vw;
  }
}
</style>