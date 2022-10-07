<template>
  <article class="hightlight-card">
    <header>
      <h2 class="hightlight-card__title">
        {{ title }}
      </h2>
    </header>
    <main class="hightlight-card__main">
      <h3 class="hightlight-card__value">
        {{ valueRounded }}<span class="hightlight-card__unit-value">{{ valueMeasure }}</span>
      </h3>           
    </main>
    <footer class="hightlight-card__footer">
      <slot />
    </footer>
  </article>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    title:{
      default:'',
      type:String
    },
    value:{
      default:0,
      type: Number
    },
    decimal:{
      default:0,
      type: Number
    },
    valueMeasure:{
      default:'',
      type:String
    }
  },
  data(){
    return {
      valueAnimated: this.value,
    }
  },
  watch: {
    value(newVal){
      gsap.to(this.$data, {valueAnimated: newVal, duration:1});
    }
  },
  computed:{
    valueRounded(){
      return parseFloat(this.valueAnimated).toFixed(this.decimal).toString();
    }
  }
}
</script>

<style scoped>
  .hightlight-card {
    background-color: #1E213A;
    color:#E7E7EB;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    gap:.5rem;
  }
  .hightlight-card__title {
    font-size:1rem;
    font-weight: 500;
    margin:0;
  }
  .hightlight-card__main{
    flex-grow:1;
  }
  .hightlight-card__value {
    font-size: 4rem;
    margin:0;
  }
  .hightlight-card__unit-value {
    font-size: 2.5rem;
    font-weight: 400;    
  }
</style>