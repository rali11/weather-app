<template>
  <div 
    id="app" 
    :class="[!hideSidebar || !hidePreloading ? 'no-scroll' : '']"
  >   
    <div :class="['preloading', hidePreloading ? 'preloading--hidden':''] ">
      <span class="icon-loading" />
    </div>
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
      hidePreloading:true,
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
    position: relative;
  }  
  .no-scroll {
    overflow: hidden;
  }
  .preloading {    
    margin-left:calc(((100vw - 100%)/2)*-1);        
    color:#E7E7EB;    
    position: absolute;
    top:0;
    left:0;
    background-color: #1E213A; 
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    z-index:2;
    opacity: 1;
    transition: all .5s;
  }
  .preloading--hidden {    
    visibility: hidden;
    opacity: 0;
    transition: all .5s;
  }
  .icon-loading {
    animation: lds-dual-ring 1s linear infinite;
  }  
  .icon-loading::after {   
    content: "\e863";
    font-family: "Material Icons";  
    background-color: transparent;    
    font-size: 5rem;    
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
