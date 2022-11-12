<template>
  <section class="forecast">
    <forecast-list-item
      v-for="(item, index) in forecast5Days"
      :key="index"
      :date="item.date"
      :min-temperature="item.minTemperature"
      :max-temperature="item.maxTemperature"
      :show-celsius="showCelsius"
      :image="image"
    />    
  </section>
</template>

<script>
import ForecastListItem from './ForecastListItem.vue';
import LightCloud from '../assets/img/LightCloud.png';
import {mapGetters} from  'vuex';

export default {
  components: {
    ForecastListItem,
  },
  data(){
    return {
      image:LightCloud,
      showCelsius:true,
    };
  },
  computed:{
    ...mapGetters([
        'forecast5Days',
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