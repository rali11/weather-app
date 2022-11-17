<template>
  <aside class="sidebar">    
    <the-sidebar-weather 
      :temperature="currentWeather.currentTemperature"
      :location="currentWeather.cityName"
      :temperature-description="currentWeather.weatherDescription"  
      :image="currentWeather.weatherIconCode"
      :measure="temperatureMeasure"
      @open-search="openSearch"
    />        
    <the-sidebar-navigation v-model="hidesidebar" />
  </aside>
</template>

<script>
  import TheSidebarNavigation from './TheSidebarNavigation.vue';
  import TheSidebarWeather from './TheSidebarWeather.vue';
  import {mapGetters} from  'vuex';

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
        hidesidebar:true,
      }
    },
    computed:{      
      ...mapGetters([
        'currentWeather',
        'temperatureMeasure',
      ]),
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