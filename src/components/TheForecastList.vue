<template>
  <div class="forecast-list">
    <forecast-list-item
      v-for="(item, index) in daysTemp"
      :key="index"
      :date="item.date"
      :temp-celsius="item.temp"
      :show-celsius="showCelsius"
      :image="image"
    />    
  </div>
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
      daysTemp:[
        {date: new Date(), temp: {max:'16', min:'11'} },
        {date: new Date(), temp: {max:'16', min:'11'} },
        {date: new Date(), temp: {max:'16', min:'11'} },
        {date: new Date(), temp: {max:'16', min:'11'} },
        {date: new Date(), temp: {max:'16', min:'11'} },
      ]
    };
  }
}
</script>

<style>
  @media (max-width: 768px) { 
    .forecast-list{
      width: fit-content;
      display: grid;
      grid-template-columns: repeat(2, max-content);
      gap:26px;
    }
  }
  @media (min-width: 769px) { 
    .forecast-list {
      width: fit-content;
      display: grid;
      grid-template-columns: repeat(5, max-content);
      gap:26px;
    }
  }
</style>