<template>
  <section class="forecast">
    <forecast-list-item
      v-for="(item, index) in forecast5Days"
      :key="index"
      :date="item.date"
      :min-temperature="item.minTemperature"
      :max-temperature="item.maxTemperature"
      :temperature-measure="temperatureMeasure"
      :image="item.weatherIconCode"
    />    
  </section>
</template>

<script>
import ForecastListItem from './ForecastListItem.vue';
import {mapGetters} from  'vuex';

export default {
  components: {
    ForecastListItem,
  },
  data(){
    return {
      showCelsius:true,
    };
  },
  computed:{
    ...mapGetters([
        'forecast5Days',
        'temperatureMeasure',
      ]),
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