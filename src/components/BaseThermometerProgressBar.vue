<template>
  <div class="thermometer">
    <ul class="thermometer__scale">
      <li>0</li>
      <li>50</li>
      <li>100</li>
    </ul>
    <div class="thermometer__progress">
      <div 
        :style="widthClass"
        class="thermometer__progress-bar"
      />
    </div>
    <span class="thermometer__unit">
      %
    </span>
  </div>
</template>

<script>
import Tween from '@tweenjs/tween.js';

export default {
  props: {
    percent:{
      default:0,
      type:Number
    }
  },
  data(){
    return {
      styleCss:{
        width:this.percent,
      }
    }
  },
  watch:{
    percent(newVal){
      function animate () {
        if (Tween.update()) {
          requestAnimationFrame(animate)
        }
      }

      new Tween.Tween(this.styleCss).to({width:newVal},750).start();
      animate();
    }
  },
  computed:{
    parsePercent(){
      return 229*(this.percent/100);
    },
    widthClass(){
      return {width: `${this.styleCss.width}%`};
    }
  }
}
</script>

<style scoped>
   .thermometer {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 0;
    width: fit-content;
  }
  .thermometer__scale {
    font-size: 12px;    
    font-weight: 700;
    color:#A09FB1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 229px;
    margin: 2px auto;   
    padding: 0;
    height: auto;
    list-style: none;
  }
  .thermometer__progress {
    background-color: #E7E7EB;
    height: 8px;
    width: 229px;
    margin: auto;
    border-radius: 80px;
    overflow: hidden;
  }
  .thermometer__progress-bar {
    width: 0;
    height: 8px;
    border-radius: 80px;
    background-color: #FFEC65;
  }  
  .thermometer__unit {
    text-align: end;    
    font-weight: 700;
    font-size:12px;
    color:#A09FB1;
    padding-top:2px;
  }
</style>