<template>
  <div>
    <Navbar/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['getCountries']),
  },
  mounted() {
    this.getCountries();
  },
};
</script>
