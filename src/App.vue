<template>
  <div 
    id="app" 
    :class="[!hideSidebar ? 'no-scroll' : '']"
  >   
    <the-sidebar v-model="hideSidebar" />
    <the-main v-model="hideBackdrop" />
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
      hideBackdrop:true,
      hideSidebar:true,
    }
  },
  watch:{
    hideSidebar(newVal){
      this.hideBackdrop = newVal;
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
  .no-scroll {
    overflow: hidden;
  }
</style>
