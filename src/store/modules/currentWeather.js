import WeatherApi from '../../api/weatherbit';

const state = () => ({
  currentWeather:{},
});

const getters = {
  currentWeather(state){
    return state.currentWeather;
  }
};

const actions = {
  async getCurrentWeather({commit}, coordinates){
    try {
      const currentWeather = await WeatherApi.getCurrentWeather(coordinates);
      commit('setCurrentWeather', currentWeather);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const mutations = {
  setCurrentWeather(state, currentWeather){
    state.currentWeather = currentWeather;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

