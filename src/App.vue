<template>
  <div :class="`main-container main-container__${getTimeOfDay.toLowerCase()}`">
    <header class="header">
      <Header />
    </header>
    <main>
      <CurrentLocation />
      <CityWeatherList />
    </main>
  </div>
  <router-view/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Header from '@/components/Header';
import CurrentLocation from '@/components/CurrentLocation';
import CityWeatherList from '@/components/CityWeatherList';

export default {
  components: {
    Header,
    CurrentLocation,
    CityWeatherList,
  },

  data() {
    return {
      timeOfDay: true
    }
  },

  beforeCreate() {
    this.$store.commit('initialiseStore');
  },

  computed: {
    ...mapGetters(['getTimeOfDay'])
  },

  methods: {
    ...mapActions(['fetchWeatherInCurrentLocation']),
  },

  created() {
    this.fetchWeatherInCurrentLocation();
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/main.scss";

.main-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px;
  overflow-y: scroll;

  &__day, &__night {
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__day {
    background-image: url("~@/assets/img/background-day.png");
  }

  &__night {
    background-image: url("~@/assets/img/background-night.png");
  }
}

@include mobile {
  .main-container {
    height: 100%;
  }
}
</style>
