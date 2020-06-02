<template>
  <div class="grid-item">
    <div class="flag-image">
      <img :src="flag" alt="">
    </div>
    <div class="grid-item-desc">
      <p class="title">{{ name }}</p>
      <p><span>Population:</span> {{ population }}</p>
      <p><span>Region:</span> {{ region }}</p>
      <p><span>Capital:</span> {{ capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flag', 'name', 'population', 'region', 'capital'],
};
</script>
