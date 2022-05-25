<template>
  <div class="header__search">
    <form class="header__form" action="" @submit.prevent>
      <input type="text" placeholder="Enter the city..." v-model="city">
      <button @click="addCityToList">Add city</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Header',

  data() {
    return {
      city: '',
    }
  },

  methods: {
    ...mapActions(['getCitiesWeather']),

    addCityToList() {
      this.getCitiesWeather(this.city);
      this.city = '';
    }
  }
}
</script>