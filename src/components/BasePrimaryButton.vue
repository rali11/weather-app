<template>
  <button 
    @mousedown="mousedownTrigger"
    class="button button--primary"
  >
    <slot />
    <span 
      :style="classWidth"
      class="ripple"    
    />
  </button>
</template>


<script>
  import '../assets/css/button.css'; 
  import Tween from '@tweenjs/tween.js';

  export default {
    inheritAttrs:true,
  data(){
    return {
      showRipple:false,
      styleCss:{
        transform:1,
        opacity:0,
        top:0,
        left:0,
      }
    }
  },
  mounted(){
    this.$el.addEventListener('mousemove',this.trackCursor);
  },
  methods:{
    mousedownTrigger(){           
      this.$el.removeEventListener('mousemove',this.trackCursor);
      this.styleCss.opacity = .8;
      function animate () {
        if (Tween.update()) {
          requestAnimationFrame(animate)
        }
      }
      new Tween.Tween(this.styleCss)
      .to({transform:15},250)
      .onComplete(() => {
        this.styleCss.opacity = 0; 
        this.styleCss.transform = 1;
        this.$el.addEventListener('mousemove',this.trackCursor);
      })
      .start();      
      animate();
    },
    trackCursor(e){
      this.styleCss.top = e.offsetY;
      this.styleCss.left = e.offsetX;
    }
  },
  computed:{
    classWidth(){
      return {
        transform: `scale(${this.styleCss.transform})`,
        opacity:`${this.styleCss.opacity}`,
        top:`${this.styleCss.top}px`,
        left:`${this.styleCss.left}px`
      };
    }
  }
  }
</script>

<style scoped>
  .ripple {
    height: 25px;
    width: 25px;;
    border-radius:50%;
    background-color: #3C47E9;
    position: absolute;
  }
</style>