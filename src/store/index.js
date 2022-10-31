import Vue from 'vue';
import Vuex from 'vuex';
import currentWeather from './modules/currentWeather';
import forecast5Days from './modules/forecastWeather';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    currentWeather,
    forecast5Days,
  },
});