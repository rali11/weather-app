<template>
  <div class="thermometer">
    <ul class="thermometer__scale">
      <li class="thermometer__scale-item">
        0
      </li>
      <li class="thermometer__scale-item">
        50
      </li>
      <li class="thermometer__scale-item">
        100
      </li>
    </ul>
    <div class="thermometer__progress">
      <div 
        :style="fulfilledProgress"
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
    fulfilledProgress(){
      return {width: `${this.styleCss.width}%`};
    }
  }
}
</script>

<style scoped>
   .thermometer {
    color:#A09FB1;    
    font-size: .8rem;      
    font-weight: 700;
  }
  .thermometer__scale {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 229px;
    margin: 2px 0;   
    padding: 0;
    list-style: none;    
    text-align: center;
  }
  .thermometer__scale-item {
    flex: 1;
  }
  .thermometer__scale-item:first-child {
    text-align: start;
  }
  .thermometer__scale-item:last-child {
    text-align: end;
  }
  .thermometer__progress {
    background-color: #E7E7EB;
    height: 8px;
    width: 229px;
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
    float: right;  
    padding-top:2px;
  }
</style>