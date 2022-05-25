<template>
  <div v-if="getCurLocWeather.length !== 0" class="big-card">
    <div :class="`big-card__wrap big-card__wrap--${getMainWeather}`">
      <div :class="`big-card__weather-icon big-card__weather-icon--${getMainWeather}`">
      </div>
      <div class="big-card__city">
        <span>{{getCurLocWeather.name}}</span>
      </div>
      <div class="big-card__country">
        <span>{{getCurLocWeather.sys.country}}</span>
      </div>
      <div class="big-card__temperature">
        <span>{{(getCurLocWeather.main.temp).toFixed(1)}}°</span>
      </div>
      <div class="big-card__description">
        <span>{{getCurLocWeather.weather[0].description}}</span>
      </div>
      <div class="big-card__temperature big-card__temperature--min-max">
        <span>{{(getCurLocWeather.main.temp_min).toFixed(1)}}°</span>
        <span>{{(getCurLocWeather.main.temp_max).toFixed(1)}}°</span>
      </div>
      <div class="big-card__temperature big-card__temperature--other">
        <div class="big-card__temperature big-card__temperature--other big-card__temperature--feels-like">
          <span>{{(getCurLocWeather.main.feels_like).toFixed(1)}}°</span>
          <span>feels like</span>
        </div>
        <div class="big-card__temperature big-card__temperature--other big-card__temperature--feels-like">
          <span>{{(getCurLocWeather.main.humidity)}}%</span>
          <span>humidity</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CurrentLocation',

  computed: {
    ...mapGetters(['getCurLocWeather', 'getMainWeather'])
  },
}
</script>
