<template>
  <main :class="['main', !hideBackdrop ? 'main--no-scroll':'']">
    <div class="main__container">
      <temperature-measure-radio-button v-model="celsiusMeasure" />
      <the-forecast-list />           
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
    <div :class="['main__backdrop', hideBackdrop ? 'main__backdrop--hide' : '']" />     
  </main>    
</template>

<script>
import TemperatureMeasureRadioButton from './TemperatureMeasureRadioButton.vue';
import TheForecastList from './TheForecastList.vue';
import TheHightlightsList from './TheHightlightsList.vue';

  export default {
    components: {
      TheForecastList,
      TheHightlightsList,
      TemperatureMeasureRadioButton,
    },   
    model:{
      prop:'hideBackdrop',
      event:'hide-backdrop'
    },
    props:{
      hideBackdrop:{
        default:true,
        type:Boolean
      }
    },
    data(){      
      return {
        celsiusMeasure:true,
      }
    },
    watch:{
      celsiusMeasure(newVal){
        this.$store.commit('setCelsiusMeasure', newVal);
      }
    }
  }
</script>

<style scoped>
  .main {
    flex-grow: 1;
    padding:1rem 0;
    background-color:#100E1D;    
    height: var(--main-height);
    max-width: 100%;
    overflow:auto;
    position: relative;
  }
  .main__container {  
    max-width: var(--main-container);
    margin-left:calc(calc(100% - var(--main-container)) / 2);
    display: flex;
    height: 100%;
    flex-direction: column;
    gap:4rem;    
  }  
  .main__footer {
    text-align: center;
    color:#A09FB1;
    margin-top:-1rem;
  }
  .main__link-footer,
  .main__link-footer:visited,  
  .main__link-footer:active {
    color:#A09FB1;
    font-weight: 700;
  }
  .main__backdrop {
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: #100E1D;
    opacity: .7;
    transition: all .3s;
  }
  .main__backdrop--hide {
    opacity: 0;
    z-index: -1;
    transition: all .3s;
  }
  .main--no-scroll {
    overflow: hidden;
  }
</style>