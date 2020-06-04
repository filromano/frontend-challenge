<template>
  <div>
    <div class="topbar">
      <div class="container">
        <div class="topbar-elements">
          <div>
            <h1>Where in the world</h1>
          </div>
          <div class="switch-mode" @click="switchMode">
            <ion-icon name="moon" v-if="darkMode"></ion-icon>
            <ion-icon name="moon-outline" v-else></ion-icon>
            <p class="mode">Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['darkMode']),
  },
  methods: {
    ...mapActions(['changeMode']),
    switchMode() {
      if (this.darkMode) {
        this.changeMode(false);
      } else {
        this.changeMode(true);
      }
    },
  },
};
</script>
