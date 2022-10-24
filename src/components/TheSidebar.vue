<template>
  <aside class="sidebar">    
    <the-sidebar-weather 
      temperature="25"
      location="Buenos Aires"
      temperature-description="Shower"  
      :image="image"
      @open-search="openSearch"
    />        
    <the-sidebar-navigation v-model="hideSidebar" />
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
        hideSidebar:true,
      }
    },
    methods:{
      openSearch(){
        this.hideSidebar = !this.hideSidebar;
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