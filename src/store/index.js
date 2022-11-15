import Vue from 'vue';
import Vuex from 'vuex';
import currentWeather from './modules/currentWeather';
import forecast5Days from './modules/forecastWeather';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    currentWeather,
    forecast5Days
  },
  state:{
    isCelsius:true,
  },
  getters:{ 
    temperatureMeasure(state){
      return state.isCelsius ? 'C':'F';
    }
  },
  mutations:{
    setCelsiusMeasure(state, isCelsius){
      state.isCelsius = isCelsius;
    }
  },
  actions:{
    getCurrentPosition(){
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          ({coords}) => { resolve(coords)}, 
          error => { reject(error) }
        );     
      })
    }
  }
});