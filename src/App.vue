<template>
  <div id="app">   
    <the-sidebar-weather 
      temperature="25"
      temperature-description="Shower"
      :image="image"
      location="Buenos Aires"
    />
    <the-main />
  </div>
</template>

<script>

import './assets/main.css';
import './assets/reset.css';
import TheMain from './components/TheMain.vue';
import TheSidebarWeather from './components/TheSidebarWeather.vue';
import LightCloud from '../src/assets/img/LightCloud.png';


export default {
  components: { TheMain, TheSidebarWeather },
  name: 'App',  
  data(){
    return {
      image:LightCloud,
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
