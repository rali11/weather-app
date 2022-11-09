<template>
  <section class="hightlights">
    <h2 class="hightlights__title">
      Today's Hightlights
    </h2>        
    <hightlights-list-wind-item 
      :deg="degWind"
      :value="currentWeather.windSpeed"
      :wind-direction="currentWeather.windDirection"
    />
    <hightlights-list-item 
      title="Humidity"
      :value="currentWeather.humidity"
      value-measure="%"
    >
      <base-thermometer-progress-bar 
        :percent="currentWeather.humidity"
      />
    </hightlights-list-item>
    <hightlights-list-item
      title="Visibility"
      :value="currentWeather.visibility"
      :decimal="1"
      value-measure=" km" 
    />
    <hightlights-list-item
      title="Air Pressure"
      :value="currentWeather.airPressure"
      value-measure=" mb" 
    />
  </section>
</template>

<script>
import BaseThermometerProgressBar from './BaseThermometerProgressBar.vue';
import HightlightsListItem from './HightlightsListItem.vue';
import HightlightsListWindItem from './HightlightsListWindItem.vue';
import {mapGetters} from  'vuex';

export default {
  components: {
    BaseThermometerProgressBar, 
    HightlightsListItem, 
    HightlightsListWindItem 
  },
  data(){
    return {
      humidity:84,
      wind:7,
      visibility:6.4,
      airPressure:998,
    }
  },
  computed:{
    ...mapGetters([
        'currentWeather',
      ]),
      degWind(){
        return 90 - this.currentWeather.windDirectionDegrees;
      }
  }
}
</script>

<style scoped>
  .hightlights {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 20rem);
    gap:3rem;
  }
  .hightlights__title {
    color:#E7E7EB;
    grid-column: 1 / -1;
    margin-bottom: -1rem;
  }
</style>