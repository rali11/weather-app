<template>
  <section class="hightlights">
    <h2 class="hightlights__title">
      Today's Hightlights
    </h2>        
    <hightlights-list-wind-item 
      :deg="degWind"
      :value="wind"
    />
    <hightlights-list-item 
      title="Humidity"
      :value="humidity"
      value-measure="%"
    >
      <base-thermometer-progress-bar 
        :percent="humidity"
      />
    </hightlights-list-item>
    <hightlights-list-item
      title="Visibility"
      :value="visibility"
      :decimal="1"
      value-measure=" miles" 
    />
    <hightlights-list-item
      title="Air Pressure"
      :value="airPressure"
      value-measure=" mb" 
    />
  </section>
</template>

<script>
import BaseThermometerProgressBar from './BaseThermometerProgressBar.vue'
import HightlightsListItem from './HightlightsListItem.vue'
import HightlightsListWindItem from './HightlightsListWindItem.vue'

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
      degWind:-150,
    }
  },
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
    margin-bottom:-1rem;
  }
</style>