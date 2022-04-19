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
.wrapper {
    width:100%;    
  }
a {
    text-decoration: none;    
}
h1 {
	font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
p {
  font-size:1rem;
}
.pokemonType {
    color:white;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;          
}
@media screen and (orientation:portrait) {
.pokemonType {
    padding: 3vw 1.5vw 3vw 1.5vw; 
    border-radius: 1.5rem; 
    margin-bottom:2vw;
}
}
@media screen and (orientation:landscape) {
.pokemonType {
    padding: 1vw 1.5vw 1vw 1.5vw; 
    border-radius: 2rem; 
    margin-bottom:1vw;
}
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
</style>