<template>
  <div>
    <GridItem v-for="country in countries"
              :key="country.name"
              :flag = "country.flag"
              :population = "country.population"
              :region = "country.region"
              :capital = "country.capital"/>
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
