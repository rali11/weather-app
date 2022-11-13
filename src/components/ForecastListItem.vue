<template>
  <article class="forecast-card">
    <header>
      <h2 class="forecast-card__title">
        {{ longDate }}
      </h2>
    </header>
    <main class="forecast-card__main">
      <img 
        class="forecast-card__img"
        :src="image" 
        :alt="imageAlt"
      >
      <ul class="forecast-card__temperatures">
        <li>
          {{ maxTemperatureFormat }}
        </li>
        <li class="forecast-card--muted">
          {{ minTemperatureFormat }}
        </li>
      </ul>
    </main>     
  </article>
</template>

<script>
export default {
  props:{
    date:{
      default:()=>{},
      type:Date
    },
    maxTemperature:{
      default:0,
      type:Number,
    },
    minTemperature: {
      default: 0,
      type:Number,
    },
    temperatureMeasure: {
      default:'C',
      type:String
    },
    image: {
      default: '',
      type:String
    },
    imageAlt: {
      default: 'draw description of the weather',
      type:String
    }
  },
  computed:{
    maxTemperatureFormat(){
      return `${this.maxTemperature}°${this.temperatureMeasure}`;
    },
    minTemperatureFormat(){
      return `${this.minTemperature}°${this.temperatureMeasure}`;
    },
    longDate(){
      return this.date.toLocaleDateString('en-UK',{weekday:'short', day:'numeric', month:'short'});
    }
  }
}
</script>

<style scoped>
  .forecast-card {
    background-color: #1E213A;
    height: 11.4rem;
    padding:1rem 0;    
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #E7E7EB;    
    text-align: center;   
    font-size: 1rem;
    overflow: hidden;
  }
  .forecast-card__title {
    text-transform: capitalize;
    font-size:1rem;
    font-weight: 500;
    margin:0;
  }  
  .forecast-card__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1.8rem;
  }
  .forecast-card__img {
    width: 4rem;
    height: 4rem;
  }
  .forecast-card__temperatures {
    margin:0;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    list-style: none;
  }  
  .forecast-card--muted {
    color:#A09FB1;
  }
</style>