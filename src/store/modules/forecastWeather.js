import rapidApi from '@/api/rapidApi.js';

const state = () => ({
  forecast:[],
})

const getters = {
  forecast5Days(state, getters, rootState){
    return state.forecast.map(day => {
      if (!rootState.isCelsius){
        const dayFarenheit = {...day};
        dayFarenheit.maxTemperature = parseFloat(((day.maxTemperature*1.8)+32).toFixed(1));
        dayFarenheit.minTemperature = parseFloat(((day.minTemperature*1.8)+32).toFixed(1));
        return dayFarenheit;
      }
      return day;
    });
  }
}

const actions = {
  async getForecast({commit}, coordinates){
    try {
      const forecast = await rapidApi.getForecast5Days(coordinates);
      commit('setForecast', forecast);
    } catch (error) {
      console.log(error.message);
    }    
  }
}

const mutations = {
  setForecast(state, forecast){
    state.forecast = forecast;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}