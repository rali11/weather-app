<template>
  <section class="temperature-measure">
    <button 
      :class="['temperature-measure__radio-btn', celsiusCheck]"
      @click="$emit('change', true)"
    >
      °C
    </button>
    <button 
      :class="['temperature-measure__radio-btn', farenheitCheck]"
      @click="$emit('change', false)"
    >
      °F
    </button>
  </section>
</template>

<script>
  export default {
    model:{
      prop:'checked',
      event:'change',
    },
    props: {
      checked:Boolean,
    },
    computed:{
      celsiusCheck(){
        return this.checked ? 'temperature-measure__radio-btn--checked' : '';
      },
      farenheitCheck(){
        return !this.checked ? 'temperature-measure__radio-btn--checked' : '';
      }
    }
  }
</script>

<style scoped>
  .temperature-measure {
    display: flex;
    justify-content: end;
    gap: 1rem;
  }
  .temperature-measure__radio-btn {
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    border:0;
    font-weight: 700;
    font-size: 1rem;
    color:#E7E7EB;
    background-color: #585676;
  }
  .temperature-measure__radio-btn:hover {
    background-color: #3b394d;
  }
  .temperature-measure__radio-btn--checked {
    color:#110E3C;
    background-color:#E7E7EB;
  }
  .temperature-measure__radio-btn--checked:hover {
    background-color:#a5a2c9;
  }
</style>