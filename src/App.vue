<template>
  <div id="app">
    <div class="light-mode">
      <Topbar class="container"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue';

export default {
  components: {
    Topbar,
  },
};
</script>

<style lang="scss">
  @import './style/main.scss';
</style>
