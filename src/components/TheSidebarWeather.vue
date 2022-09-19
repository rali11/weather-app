<template>
  <article class="card-aside">        
    <section class="card-aside__content">
      <header class="card-aside__header">
        <base-secondary-button>
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
    </section>    
    <section class="card-aside__background" /> 
  </article>
</template>

<script>
import BaseFabButton from './BaseFabButton';
import BaseSecondaryButton from './BaseSecondaryButton';

export default {
  components: { BaseSecondaryButton, BaseFabButton },
  props:{
    temperature:{
      default:'',
      type:String
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
 @media (max-width: 768px) {
    .card-aside {
      position: relative;
      background-color:#1E213A;    
      height: 124vh;
      width: 100vw;
    }
    .card-aside__header {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      gap: 35%;
      padding: 0 0;
      margin-top:1rem;
    }
  }
  @media (min-width: 769px) {
    .card-aside {
      position: relative;
      background-color:#1E213A;    
      height: 100vh;
      width: 459px;
      padding: 0 3rem;
    }
    .card-aside__header {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 3rem;
      margin-top:1.5rem;
    }
  }  
  .card-aside__content {     
    position: absolute;
    top:0;
    left:0;  
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;   
    z-index: 2;
  }
  .card-aside__background {
    background-image: url('../assets/img/Cloud-background.png');
    background-repeat: no-repeat;
    background-size:155%;
    background-position-x: center;
    background-position-y: 7rem;
    height: 100%;
    width: 100%;
    top:0;
    left:0;
    position: absolute;
    opacity: .05;
    z-index: 1;
  }
  .card-aside__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-aside__picture {
    margin-top:8rem;
  }
  .card-aside__footer {
    padding-top:2.5rem;
    color: #88869D;    
    font-size: 18px;
  }
  .card-aside__temperature-value {
    font-size:144px;
    font-style: normal;
    font-weight: 500;
    color:#E7E7EB;
    line-height: 0;
    margin: 8rem;
  }
  .card-aside__measure {
    font-size: 48px;
    color:#A09FB1;
  }
  .card-aside__temperature-description {
    font-size:36px;
    line-height: 0;
    font-weight: 600;
    text-align: center;
    color: #A09FB1;
    margin: 2rem;
  }
  .card-aside__date {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .card-aside__location-place {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:5px;
  }
</style>