<template>
  <hightlights-list-item
    title="Humidity"
    :value="percentHumidity"
    value-measure="%"
    :show-footer="showFooter"
  >
    <div class="footer-container">
      <base-thermometer-progress-bar
        :percent="percentHumidity"
      />
    </div>
  </hightlights-list-item>
</template>

<script>

import BaseThermometerProgressBar from './BaseThermometerProgressBar.vue';
import HightlightsListItem from './HightlightsListItem.vue';

export default {
  components:{
    BaseThermometerProgressBar,
    HightlightsListItem,
  },
  props:{
    percentHumidity:{
      default:0,
      type:Number
    }
  },
  data(){
    return {
      showFooter:true,
      percentUpdate: this.percentHumidity,
    }
  }
}
</script>

<style scoped>
  .footer-container {
    margin-top:-15px;
    display:flex;
    flex-direction: row;
    justify-content: center;
  }
</style>