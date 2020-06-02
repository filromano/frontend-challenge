<template>
  <div>
    <Navbar/>
    <FlagGrid/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Navbar from '../components/Navbar.vue';
import FlagGrid from '../components/Grid/FlagGrid.vue';

export default {
  components: {
    Navbar,
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
