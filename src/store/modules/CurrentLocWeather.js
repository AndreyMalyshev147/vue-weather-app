import axios from 'axios';

const state = {
  weather: {},
  isDay: '',
  mainWeather: '',
};

const getters = {
  getCurLocWeather(state) {
    return state.weather;
  },

  getTimeOfDay(state) {
    return state.isDay;
  },

  getMainWeather(state) {
    return state.mainWeather;
  }
};

const actions = {
  async fetchWeatherInCurrentLocation({ commit }) {
    try {
      const resCoords = await axios.get('https://ipinfo.io');
      const dataCoords = resCoords.data.loc.split(',');

      const coords = {
        lat: dataCoords[0],
        lon: dataCoords[1]
      };

      const resWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coords.lat}&lon=${coords.lon}&appid=8ad1811ee44e3fe3020912cc0d2ef4e0`);
      const data = resWeather.data;

      commit('updateWeather', data);
      commit('checkDay', data);
      commit('checkMainWeather', data);
    } catch (e) {
      console.log(e);
    }
  }
};

const mutations = {
  initialiseStore(state) {
    if(localStorage.getItem('store')) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      );
    }
  },

  updateWeather(state, weather) {
    state.weather = weather
  },

  checkDay(state, timeOfday) {
    if (timeOfday.weather[0].icon.includes('n')) {
      state.isDay = 'Night';
    } else {
      state.isDay = 'Day';
    }
  },

  checkMainWeather(state, mainWeather) {
    const weatherType = mainWeather.weather[0].main;

    if (weatherType.includes('Clouds')) {
      state.mainWeather = 'Clouds';
    }

    if (weatherType.includes('Thunderstorm')) {
      state.mainWeather = 'Thunderstorm';
    }

    if (weatherType.includes('Rain')) {
      state.mainWeather = 'Rain';
    }

    if (weatherType.includes('Clear')) {
      state.mainWeather = 'Clear';
    }

    if (weatherType.includes('Snow')) {
      state.mainWeather = 'Snow';
    }
  }
};

export default { state, getters, actions, mutations };
