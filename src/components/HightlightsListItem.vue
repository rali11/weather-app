<template>
  <article class="card-hightlight">
    <header class="card-hightlight__header">
      {{ title }}
    </header>
    <main class="card-hightlight__body">
      {{ valueRounded }}<span class="card-hightlight__measure">{{ valueMeasure }}</span>      
    </main>
    <footer
      v-show="showFooter"
      class="card-hightlight__footer"
    >
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
    valueRound:{
      default:0,
      type: Number
    },
    valueMeasure:{
      default:'',
      type:String
    },
    showFooter:{
      default:false,
      type:Boolean
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
      return parseFloat(this.valueAnimated).toFixed(this.valueRound).toString();
    }
  }
}
</script>

<style scoped>
  p {
    margin: 0;
  }
  .card-hightlight {
    width: 328px;
    height: auto;
    background-color: #1E213A;
    color:#E7E7EB;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap:6px;
    padding: 22px 0 38px 0;
  }
  .card-hightlight__header {
    font-weight: 500;
    font-size: 1rem;
  }
  .card-hightlight__body {
    font-weight: 700;
    font-size:64px;
    font-style: normal;
    line-height: 75.14px;
  }
  .card-hightlight__measure {
    font-weight: 500;
    font-size:36px;
    line-height: 42.26px;
    margin: 0;
  }
  .card-hightlight__footer {
    height: 38px;
    padding-top:20px;
  }
</style>