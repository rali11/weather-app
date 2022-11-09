<template>
  <section class="card-aside">        
    <div class="card-aside__content">
      <header class="card-aside__header">
        <base-secondary-button 
          @click="$emit('open-search')"
        >
          Search for places 
        </base-secondary-button>
        <base-fab-button>
          <span class="material-icons">
            my_location
          </span>
        </base-fab-button>
      </header>
      <main class="card-aside__body">
        <img
          class="card-aside__picture" 
          :src="image" 
          alt=""
        >
        <h1 class="card-aside__temperature-value">
          {{ temperature }}<span class="card-aside__measure">°{{ measure }}</span>          
        </h1>
        <h2 class="card-aside__temperature-description">
          {{ temperatureDescription }}
        </h2>
      </main>
      <footer class="card-aside__footer">
        <div class="card-aside__date">
          <p>Today</p>
          <p>•</p>
          <p>
            {{ longDate }}
          </p>
        </div>
        <div class="card-aside__location-place">
          <span class="material-icons">
            place
          </span>
          {{ location }}
        </div>
      </footer>
    </div>    
    <div class="card-aside__background" /> 
  </section>
</template>

<script>
import BaseFabButton from './BaseFabButton';
import BaseSecondaryButton from './BaseSecondaryButton';

export default {
  components: { BaseSecondaryButton, BaseFabButton },
  props:{
    temperature:{
      default:0,
      type:Number
    },
    temperatureDescription:{
      default:'',
      type:String
    },
    measure:{
      default:'C',
      type:String
    },
    location:{
      default:'',
      type:String
    },
    image: {
      default: '',
      type:String
    }
  },
  data(){
    return {
      date:new Date(),
    }
  },
  computed:{
    longDate(){
      return this.date.toLocaleDateString('en-UK',{weekday:'short', day:'numeric', month:'short'});
    }
  }
}
</script>

<style scoped>
 .card-aside {
  position: relative;
  width:100%;
  height: 100%;
  background-color:#1E213A;    
  overflow: auto;
 }
 .card-aside__background {
  position: absolute;
  background-image: url('../assets/img/Cloud-background.png');
  background-repeat: no-repeat;
  background-size:155%;
  background-position-x: center;
  background-position-y: 6rem;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  opacity: .06;
 }
 .card-aside__content {
  position: absolute;
  top:0;
  left:0;  
  width: 100%;  
  z-index: 1;  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;  
  background-color: transparent;
 }
 .card-aside__header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 3rem;
 }
 .card-aside__body {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
 }
 .card-aside__picture {
  width: 221px;
  height: 206px;
  margin: auto;
 }
 .card-aside__temperature-value {
  font-size: 9rem;
  font-weight: 300;
  color:#E7E7EB;
  text-align: center;
 }
 .card-aside__temperature-value > .card-aside__measure {
  font-size: 3.3rem;
  color:#A09FB1;
 }
 .card-aside__temperature-description {
  color:#A09FB1;
  text-align: center;
  font-size:2.5rem;
  font-weight: 600;
 }
 .card-aside__footer {
  display: flex;
  flex-direction: column;  
  color:#88869D;
  gap:2rem;
  padding:2rem 0;
 }
 .card-aside__date {
  display: flex;
  gap: .8rem;
  text-align: center;
 }
 .card-aside__location-place {
  font-weight: 600;
  text-align: center;
  align-items: center;
  justify-content: center;  
  display: flex;
  gap: 1rem;  
 }
</style>