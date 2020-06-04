<template>
  <div class="grid-item" @click="goToCountry">
    <div class="flag-image">
      <img :src="flag" alt="">
    </div>
    <div class="grid-item-desc">
      <p class="title">{{ name }}</p>
      <p><span class="strong">Population:</span> {{ population }}</p>
      <p><span class="strong">Region:</span> {{ region }}</p>
      <p><span class="strong">Capital:</span> {{ capital }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['flag', 'name', 'population', 'region', 'capital', 'alphaCode2'],
  methods: {
    ...mapActions(['getSelectedCountry']),
    goToCountry() {
      this.$router.push({ name: 'Details', params: { alphaCode2: this.alphaCode2 } });
    },
  },
};
</script>
