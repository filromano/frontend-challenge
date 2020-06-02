<template>
  <div>
    <div>
      <img :src="flag" alt="">
    </div>
    <div>
      <h1>Title</h1>
      <div>
        <p>Population: {{ population }}</p>
        <p>Region {{ region }}:</p>
        <p>Capital: {{ capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flag', 'population', 'region', 'capital'],
};
</script>
