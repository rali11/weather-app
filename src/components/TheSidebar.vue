<template>
  <aside class="sidebar">    
    <the-sidebar-weather 
      temperature="25"
      location="Buenos Aires"
      temperature-description="Shower"  
      :image="image"
      @open-search="openSearch"
    />        
    <the-sidebar-navigation v-model="hidesidebar" />
  </aside>
</template>

<script>
  import TheSidebarNavigation from './TheSidebarNavigation.vue';
  import TheSidebarWeather from './TheSidebarWeather.vue';
  import LightCloud from '../assets/img/LightCloud.png';

  export default {
    components: { TheSidebarWeather, TheSidebarNavigation },
    model:{
      prop:'hideSidebar',
      event:'hide-sidebar'
    },
    props:{
      hideSidebar:{
        default:true,
        type:Boolean
      }
    },
    data(){
      return {
        image:LightCloud,
        hidesidebar:true,
      }
    },
    watch:{
      hideSidebar(newVal){
        this.hidesidebar = newVal;
      },
      hidesidebar(newVal){
        this.$emit('hide-sidebar', newVal);
      }
    },
    methods:{
      openSearch(){
        this.hidesidebar = !this.hidesidebar;
        this.$emit('hide-sidebar', this.hidesidebar);
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