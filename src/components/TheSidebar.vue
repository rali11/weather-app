<template>
  <aside class="sidebar">    
    <the-sidebar-weather 
      temperature="25"
      location="Buenos Aires"
      temperature-description="Shower"  
      :image="image"
    />        
    <the-sidebar-navigation />
  </aside>
</template>

<script>
import TheSidebarNavigation from './TheSidebarNavigation.vue';
import TheSidebarWeather from './TheSidebarWeather.vue';
import LightCloud from '../assets/img/LightCloud.png';

  export default {
    components: { TheSidebarWeather, TheSidebarNavigation },
    data(){
      return {
        image:LightCloud,
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    width: var(--side-bar);
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
</style>