<template>
  <div>
    <div class="filters">
      <div class="search-box">
        <input type="text"
               v-model="search"
               placeholder="Search for a country...">
               <ion-icon name="search"></ion-icon>
      </div>
      <div>
        <SelectCustom :options="regions" />
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
import SelectCustom from '../SelectCustom.vue';

export default {
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapState(['countries', 'regions', 'selectedRegion']),
    countriesList() {
      let countries = [];
      if (this.selectedRegion !== 'Filter by Region') {
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
  components: {
    GridItem,
    SelectCustom,
  },
};
</script>
