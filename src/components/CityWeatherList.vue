<template>
  <div class="weather__list-wrap">
    <ul class="weather__list">
      <li
        class="weather__list-item"
        v-for="city in filteredList"
        :key="city.id"
      >
        <div :class="`card__wrap card__wrap--${city.weather[0].main}`">
          <div class="card__delete">
            <button @click.stop="removeCities(city)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 92 92"
                fill="#f00"
              >
                <path
                  d="M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z"
                />
              </svg>
            </button>
          </div>
          <div class="card__city">
            <span>{{city.name}}</span>
          </div>
          <div class="card__country">
            <span>{{city.sys.country}}</span>
          </div>
          <div class="card__temperature">
            <span>{{city.main.temp.toFixed(1)}}°</span>
          </div>
          <div :class="`card__weather card__weather--${city.weather[0].main}`">
          </div>
        </div>
      </li>
    </ul>
    <div
      v-if="citiesList.length > 5"
      class="weather__btn-box"
    >
      <button
        class="weather__btn weather__btn--prev"
        :disabled="currentPage === 1"
        @click="changePage(-1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            transform="translate(1 1)"
          >
            <path d="M0 6h16M10 0l6 6-6 6"/>
          </g>
        </svg>
      </button>
      <button
        class="weather__btn weather__btn--next"
        :disabled="currentPage === Math.ceil(citiesList.length / perPage)"
        @click="changePage(1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            transform="translate(1 1)"
          >
            <path d="M0 6h16M10 0l6 6-6 6"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
    }
  },

  computed: {
    ...mapGetters(['citiesList', 'getCurLocWeather']),

    filteredList() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      const paginate = this.citiesList.slice(start, end);

      return paginate;
    }
  },

  methods: {
    ...mapMutations(['removeCities']),

    changePage(num) {
      this.currentPage = this.currentPage + num;
    },
  }
}
</script>
