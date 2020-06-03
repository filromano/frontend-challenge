<template>
  <div>
    <FlagGrid class="container"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import FlagGrid from '../components/Grid/FlagGrid.vue';

export default {
  components: {
    FlagGrid,
  },
  methods: {
    ...mapActions(['getCountries']),
  },
  mounted() {
    this.getCountries();
  },
};
</script>
