<template>
  <div 
    id="app" 
    :class="[!hideSidebar || !hidePreloading ? 'no-scroll' : '']"
  >   
    <div :class="['preloading', hidePreloading ? 'preloading--hidden':''] ">
      <span class="material-icons">
        wb_cloudy
      </span>
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
      hidePreloading:false,
    }
  },
  mounted(){
    this.getCurrentPosition();
  },
  watch:{
    hideSidebar(newVal){
      this.hideBackdrop = newVal;
    }
  },
  methods:{
    async getCurrentPosition(){
      try {
        const {latitude, longitude} = await this.$store.dispatch('getCurrentPosition');
        await this.$store.dispatch('getCurrentWeather', {latitude, longitude});
        await this.$store.dispatch('getForecast', {latitude, longitude});        
      } catch (error) {
        const coordinates = {latitude:-34.603722, longitude: -58.381592};
        await this.$store.dispatch('getCurrentWeather', coordinates);
        await this.$store.dispatch('getForecast', coordinates);  
      } finally {
        this.hidePreloading = !this.hidePreloading;
      }
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
    overflow:hidden;
  }
  .preloading {     
    color:#E7E7EB;    
    position: absolute;
    top:0;
    left:0;
    background-color: #1E213A; 
    max-width: 1440px;
    min-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
    margin-top:-3.7rem;
    animation: lds-dual-ring 1s linear infinite;
  }  
  .icon-loading::after {   
    content: "\e863";
    font-family: "Material Icons";  
    background-color: transparent;    
    font-size: 2rem;    
    color:#1E213A;
  }
   .material-icons {
    font-size:6rem;
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
