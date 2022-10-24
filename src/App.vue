<template>
  <div id="app">   
    <the-sidebar />
    <the-main />
  </div>
</template>

<script>

import './assets/main.css';
import './assets/reset.css';
import TheMain from './components/TheMain.vue';
import TheSidebar from './components/TheSidebar.vue';

export default {
  components: { TheMain, TheSidebar },
  name: 'App',  
  data(){
    return {
    }
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
</style>
