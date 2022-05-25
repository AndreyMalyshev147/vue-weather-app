import { createStore } from 'vuex';

import CurrentLocWeather from '@/store/modules/CurrentLocWeather';
import CitiesWeather from '@/store/modules/CitiesWeather';

export default createStore({
  modules: {
    CurrentLocWeather,
    CitiesWeather
  }
})
