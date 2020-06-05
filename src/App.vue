<template>
  <div id="app" :class="[darkMode ? 'dark-mode' : 'light-mode']">
    <Topbar/>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Topbar from './components/Topbar.vue';

export default {
  components: {
    Topbar,
  },
  computed: {
    ...mapState(['darkMode']),
  },
};
</script>

<style lang="scss">
  @import './style/style.scss';
</style>
