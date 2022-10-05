<template>
  <section class="forecast">
    <forecast-list-item
      v-for="(item, index) in forecastWeather"
      :key="index"
      :date="item.date"
      :temperature-celsius="item.temp"
      :show-celsius="showCelsius"
      :image="image"
    />    
  </section>
</template>

<script>
import ForecastListItem from './ForecastListItem.vue';
import LightCloud from '../assets/img/LightCloud.png';

export default {
  components: {
    ForecastListItem,
  },
  data(){
    return {
      image:LightCloud,
      showCelsius:true,
      forecastWeather:[
        {date: new Date(), temp: {max:'16', min:'11'} },
        {date: new Date(), temp: {max:'22', min:'11'} },
        {date: new Date(), temp: {max:'16', min:'11'} },
        {date: new Date(), temp: {max:'16', min:'11'} },
        {date: new Date(), temp: {max:'16', min:'11'} },
      ]
    };
  }
}
</script>

<style scoped>
  .forecast {
    display: grid;
    grid-template-columns: repeat(auto-fill, 7.5rem);
    justify-content: center;
    gap:1.39rem;
  }
  .forecast > *{
    flex:1;
  }
</style>