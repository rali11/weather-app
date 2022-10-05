<template>
  <div id="app">   
    <aside class="side-bar">
      <h1>holaasdasdasdasd</h1>
    </aside>
    <main class="main">
      <div class="main__content">
        <my-list-card-forecast />           
        <the-hightlights-list />  
        <footer class="main__footer">
          created by 
          <a 
            class="main__link-footer" 
            target="_blank"
            href="https://www.github.com/rali11" 
          >
            rali11
          </a>
          - devChallenges.io
        </footer>
      </div>      
    </main>    
  </div>
</template>

<script>

import './assets/main.css';
import './assets/reset.css';
import Shower from './assets/img/Shower.png';
import MyListCardForecast from './components/TheForecastList.vue';
import TheHightlightsList from './components/TheHightlightsList.vue';

export default {
  name: 'App',
  components: {
    MyListCardForecast,
    TheHightlightsList,
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
  #app {
    max-width: 1440px;
    margin:0 auto;
    display:flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;    
    height: 100vh;
  }
  .side-bar {
    width: var(--side-bar-width);
    background-color:#1E213A;
    height: 100%;
  }
  .main {
    flex-grow: 1;
    padding:3rem 0;
    background-color:#100E1D;    
    height:100vh;
    max-width: 100%;
    overflow:auto;
  }
  .main__content {  
    max-width: var(--main-container-width);
    margin-left:calc(calc(100% - var(--main-container-width)) / 2);
    display: flex;
    height: 100%;
    flex-direction: column;
    gap:5rem;    
  }  
  .main__footer {
    text-align: center;
    color:#A09FB1;
  }
  .main__link-footer,
  .main__link-footer:visited,  
  .main__link-footer:active{
    color:#A09FB1;
    font-weight: 700;
  }
  
</style>
