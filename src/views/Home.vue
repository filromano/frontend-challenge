<template>
  <div>
    <Topbar class="container"/>
    <FlagGrid class="container"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Topbar from '../components/Topbar.vue';
import FlagGrid from '../components/Grid/FlagGrid.vue';

export default {
  components: {
    Topbar,
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
