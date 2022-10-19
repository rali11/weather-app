<template>
  <div>
    <div 
      class="temperature" 
      data-measure="°C"
    >
      <input 
        type="radio" 
        name="temperature-radio"                
      >
    </div>    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .temperature::before {
    content: attr(data-measure);
    display: inline-block;
    border-radius: 100%;
    width: 2.2rem;
    height: 2.2rem;
    padding:.7rem;
    margin-right: .5rem;
    background-color: #585676;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
  }
</style>