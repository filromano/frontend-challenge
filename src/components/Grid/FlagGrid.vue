<template>
  <div>
    <div class="filters">
      <div>
        <input type="text" v-model="search">
      </div>
      <div>
        <select name="" v-model="selectedRegion" @change="selectRegion(selectedRegion)">
          <option v-for="region in regions" :key="region">{{ region }}</option>
        </select>
      </div>
    </div>
    <div class="flag-grid">
      <GridItem v-for="country in filteredList"
              :key="country.name"
              :flag = "country.flag"
              :name = "country.name"
              :population = "country.population"
              :region = "country.region"
              :capital = "country.capital"
              :alphaCode2 = "country.alpha2Code"
              />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import GridItem from './Gridtem.vue';

export default {
  data() {
    return {
      search: '',
      selectedRegion: '',
    };
  },
  computed: {
    ...mapState(['countries', 'regions']),
    countriesList() {
      let countries = [];
      if (this.selectedRegion !== '') {
        countries = this.countries.filter((country) => country.region === this.selectedRegion);
      } else {
        countries = this.countries;
      }
      return countries;
    },
    filteredList() {
      return this.countriesList.filter((country) => country.name.toLowerCase()
        .includes(this.search.toLowerCase()));
    },
  },
  methods: {
    selectRegion(value) {
      console.log(value);
    },
  },
  components: {
    GridItem,
  },
};
</script>
