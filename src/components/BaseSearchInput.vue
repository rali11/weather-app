<template>
  <div :class="['input-container',loading ? 'input-container--loading':'']">
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
      },
      loading:{
        default:false,
        type:Boolean
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
  .input-container--loading::before {
    content: "\e863";
    font-family: "Material Icons";
    display: flex;
    align-items: center;
    top:0;
    left:.8rem;
    position: absolute;
    font-size: 1.5rem;
    height: 100%;
    color:#616475;
    animation: lds-dual-ring .8s linear infinite;
  }
  .input-container:not(.input-container--loading)::before {
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

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>