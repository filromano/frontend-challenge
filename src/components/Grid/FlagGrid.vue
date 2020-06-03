<template>
  <div class="flag-grid">
    <GridItem v-for="country in countries"
              :key="country.name"
              :flag = "country.flag"
              :name = "country.name"
              :population = "country.population"
              :region = "country.region"
              :capital = "country.capital"
              :alphaCode2 = "country.alpha2Code"
              />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import GridItem from './Gridtem.vue';

export default {
  computed: {
    ...mapState(['countries']),
  },
  components: {
    GridItem,
  },
};
</script>
