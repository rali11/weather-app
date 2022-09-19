<template>
  <div id="app">
    <aside>
      <the-sidebar-weather
        temperature="24"
        temperature-description="Shower"
        location="Buenos Aires"
        :image="imageWeather"
      />
    </aside>
    <main>
      <my-list-card-forecast />    
      <my-list-card-hightlights />
      <footer>
        created by
        <a 
          href="https://github.com/rali11"
          target="_blank"
        >
          rali11
        </a> - devChallenges.io
      </footer>
    </main>    
  </div>
</template>

<script>

import './assets/main.css';
import Shower from './assets/img/Shower.png';
import MyListCardForecast from './components/TheForecastList.vue';
import MyListCardHightlights from './components/TheHightlightsList.vue';
import TheSidebarWeather from './components/TheSidebarWeather.vue';

export default {
  name: 'App',
  components: {
    MyListCardForecast,
    MyListCardHightlights,
    TheSidebarWeather,
  },
  data(){
    return {
      humidity:84,
      imageWeather:Shower
    }
  }
}
</script>

<style scoped>
  
  @media (max-width: 768px) {
    #app {
      display: grid;
      grid-template-columns: 1fr;
      gap:48px;
      margin: 0;
      padding: 0;
      background-color:  #100E1D;
    }
    aside {
      width: fit-content;
    }
    main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap:30px;
      padding-bottom:9rem;
      align-items: center;
      position: relative;
    }
  }
  @media (min-width: 769px) and (max-width: 1364px) {
    #app {
      width: fit-content;
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      margin: 0;
      padding: 0;              
      background-color:#2c2f42;
    }
    main {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 7vw;
      display: flex;
      flex-direction: column;
      gap:5rem;
      justify-content: center;
      align-items: center;
      background-color: #100E1D;
    }
  }
  @media (min-width: 1365px) {
    #app {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      margin: 0;
      padding: 0;      
      background-color:#2c2f42;
    }
    aside {
      width: fit-content;
    }
    main {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 7vw;
      display: flex;
      flex-direction: column;
      gap:5rem;
      justify-content: center;
      align-items: center;
      background-color: #100E1D;
    }
  }
  footer {
    color: #A09FB1;
    position: absolute;
    bottom:1.5rem;
  }
  footer > a {
    color: #A09FB1;
    font-weight: bold;
  }
</style>
