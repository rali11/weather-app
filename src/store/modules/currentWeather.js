//import WeatherApi from '../../api/weatherbit';
import rapidApi from '@/api/rapidApi';

const state = () => ({
  currentWeather:{},
});

const getters = {
  currentWeather(state, getters, rootState){
    if (!rootState.isCelsius){
      const farenheitMeasure = {...state.currentWeather};      
      farenheitMeasure.currentTemperature = parseFloat(((farenheitMeasure.currentTemperature*1.8)+32).toFixed(1));
      return farenheitMeasure;
    }
    return state.currentWeather;
  }
};

const actions = {
  async getCurrentWeather({commit}, coordinates){
    try {
      const currentWeather = await rapidApi.getCurrentWeather(coordinates);
      commit('setCurrentWeather', currentWeather);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const mutations = {
  setCurrentWeather(state, currentWeather){
    state.currentWeather = currentWeather;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}

