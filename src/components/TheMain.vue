<template>
  <main class="main">
    <div class="main__container">
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
</template>

<script>
  import MyListCardForecast from './TheForecastList.vue';
  import TheHightlightsList from './TheHightlightsList.vue';

  export default {
    components: {
      MyListCardForecast,
      TheHightlightsList,
    },
    
  }
</script>

<style scoped>
  .main {
    flex-grow: 1;
    padding:3rem 0;
    background-color:#100E1D;    
    height: 100%;
    max-width: 100%;
    overflow:auto;
  }
  .main__container {  
    max-width: var(--main-container);
    margin-left:calc(calc(100% - var(--main-container)) / 2);
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