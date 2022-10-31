import WeatherApi from '../../api/weatherbit.js';

const state = () => ({
  forecast:[],
})

const getters = {
  forecast5Days(state){
    return state.forecast;
  }
}

const actions = {
  async getForecast({commit}, coordinates){
    try {
      const forecast = await WeatherApi.getForecast5Days(coordinates);
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