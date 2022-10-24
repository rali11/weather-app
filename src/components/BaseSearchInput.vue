<template>
  <div class="input-container">
    <input 
      type="text" 
      class="input-search"
      placeholder="search location"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
  export default {
    inheritAttrs:true,
    model:{
      prop:'value',
      event:'input',
    },
    props:{
      value:{
        default:'',
        type:String,
      }
    }
  }
</script>

<style scoped>
  .input-container{
    display: flex;
    gap:0;
    position: relative;
  }
  .input-container::before {
    content: '\e8b6';
    font-family: "Material Icons";
    position: absolute;
    top:0;
    left:.8rem;
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 1.5rem;
    color:#616475;
  }
  .input-search {
    border-radius: 0;
    border-width: 1px;
    border-color:#E7E7EB;
    border-style: solid;
    background-color: transparent;
    color:#E7E7EB;
    font-size: 1rem;
    padding-left: 2.7rem;
    padding-top:1rem;
    padding-bottom:1rem;
    width: 100%;
  }
</style>