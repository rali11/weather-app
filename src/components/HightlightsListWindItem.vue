<template>
  <hightlights-list-item 
    title="Wind status"
    :value="value"
    value-measure=" m/s"
  >
    <div class="wind-footer">
      <span 
        :style="rotate"
        class="wind-footer__icon wind-footer__icon--size material-icons"
      >
        navigation
      </span>
      {{ windDirection }}
    </div>
  </hightlights-list-item>
</template>

<script>
import HightlightsListItem from './HightlightsListItem.vue'
import Tween from '@tweenjs/tween.js';

export default {
  components: { HightlightsListItem },
  props:{
    value:{
      default:0,
      type:Number
    },
    deg:{
      default:0,
      type:Number
    },
    windDirection:{
      default:'',
      type: String
    }
  },
  data(){
    return {
      showFooter:true,
      styleCss:{
        transform: this.deg,
      }
    }
  },
  watch:{
    deg(newVal){
      function animate () {
        if (Tween.update()) {
          requestAnimationFrame(animate)
        }
      }

      new Tween.Tween(this.styleCss).to({transform:newVal},750).start();
      animate();
    }
  },
  computed:{
    rotate(){
      return {transform: `rotate(${this.styleCss.transform}deg)`};
    }
  }

}
</script>

<style scoped>
  .wind-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top:-5px;
  }
  .wind-footer__icon {
    margin-right: 10px;    
    background-color:rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 7px;
  }
  .wind-footer__icon--size {
    font-size:18px;
  }
</style>