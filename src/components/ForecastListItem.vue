<template>
  <article class="card-forecast">
    <header class="card-forecast__header">
      {{ longDate }}
    </header>
    <img 
      class="card-forecast__body-picture"
      :src="image" 
      alt=""
    >
    <ul class="card-forecast__footer">
      <li>{{ maxTemperatureFormat }}</li>
      <li>{{ minTemperatureFormat }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  props:{
    date:{
      default:()=>{},
      type:Date
    },
    tempCelsius:{
      default:()=>{},
      type:Object
    },
    tempFarenheit:{
      default:()=>{},
      type:Object
    },
    showCelsius: {
      default:true,
      type:Boolean
    },
    image: {
      default: '',
      type:String
    }
  },
  computed:{
    measureTemp(){
      return this.showCelsius ? 'C' : 'F';
    },
    maxTemperature(){
      return this.showCelsius ? this.tempCelsius.max : this.tempFarenheit.max;
    },
    minTemperature(){
      return this.showCelsius ? this.tempCelsius.min : this.tempFarenheit.min;
    },
    maxTemperatureFormat(){
      return `${this.maxTemperature}°${this.measureTemp}`;
    },
    minTemperatureFormat(){
      return `${this.minTemperature}°${this.measureTemp}`;
    },
    longDate(){
      return this.date.toLocaleDateString('en-UK',{weekday:'short', day:'numeric', month:'short'});
    }
  }
}
</script>

<style scoped>
  .card-forecast {
    background-color: #1E213A;
    width:120px;
    height: 177px;
    padding:18px 0;    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #E7E7EB;    
    text-align: center;   
    font-size: 1rem;
    overflow: hidden;
  }
  .card-forecast__header {
    text-transform: capitalize;
  }  
  .card-forecast__body-picture {
    width: 66.51px;
    height: 62px;
    margin-bottom: 31px;
    margin-top:9px;
  }
  .card-forecast__footer {
    margin:0;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
    list-style: none;
  }  
  .card-forecast__footer > *:nth-child(2){
    color:#A09FB1;
  }
</style>