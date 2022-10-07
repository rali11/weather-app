<template>
  <div id="app">   
    <aside class="side-bar">
      <h1>sidebar</h1>
    </aside>    
    <the-main />
  </div>
</template>

<script>

import './assets/main.css';
import './assets/reset.css';
import TheMain from './components/TheMain.vue';


export default {
  components: { TheMain },
  name: 'App',  
  data(){
    return {}
  }
}
</script>

<style scoped>
  #app {
    max-width: 1440px;
    margin:0 auto;
    display:flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;    
    height: 100vh;
  }
  .side-bar {
    width: var(--side-bar);
    background-color:#1E213A;
    height: 100%;
  }
  
  
</style>
