import axios from 'axios';

const state = {
  citiesWeather: [],
};

const getters = {
  citiesList(state) {
    return state.citiesWeather;
  }
};

const actions = {
  async getCitiesWeather({ commit }, city) {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=8ad1811ee44e3fe3020912cc0d2ef4e0`);

    const data = res.data;

    commit('addCitiesWeather', data);
  }
};

const mutations = {
  addCitiesWeather(state, data) {
    state.citiesWeather.push(data);
  },

  removeCities(state, data) {
    let index = state.citiesWeather.findIndex(val => val.id === data.id);
    state.citiesWeather.splice(index, 1);
  }
};

export default { state, getters, mutations, actions };
