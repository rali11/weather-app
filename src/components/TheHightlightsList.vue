<template>
  <div>
    <h2 class="title">
      Today's Hightlights
    </h2>
    <div class="container">    
      <hightlights-list-wind-item 
        :value="wind"
        :deg="degWind"
      />
      <hightlights-list-humidity-item
        :percent-humidity="humidity"
      />
      <hightlights-list-item
        title="Visibility"
        :value="visibility"
        :value-round="1"
        value-measure=" miles"
        :show-footer="false"
      />
      <hightlights-list-item
        title="Air Pressure"
        :value="airPressure"
        value-measure=" mb"
        :show-footer="false"
      />
    </div>
  </div>
</template>

<script>
import HightlightsListHumidityItem from './HightlightsListHumidityItem.vue'
import HightlightsListWindItem from './HightlightsListWindItem.vue'
import HightlightsListItem from './HightlightsListItem.vue'
export default {
  components: { HightlightsListWindItem, HightlightsListHumidityItem, HightlightsListItem },
  data(){
    return {
      humidity:87,
      wind:7,
      visibility:6.4,
      airPressure:998,
      degWind:-150,
    }
  },
}
</script>

<style scoped>
  .title {
    color: #E7E7EB;
    margin-bottom:30px;
  }
  @media (max-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
      width: fit-content;
      gap: 32px;
    }
  }
  @media (min-width: 769px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: fit-content;
      gap: 48px;
    }
  }
  
</style>