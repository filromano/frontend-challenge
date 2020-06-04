<template>
  <div
    class="custom-select"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="selected"
      :class="{open: open}"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      class="items"
      :class="{selectHide: !open}"
    >
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="selected=option; open=false; selectRegion(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false,
    };
  },
  methods: {
    ...mapActions(['getSelectedRegion']),
    selectRegion(option) {
      this.getSelectedRegion(option);
    },
  },
};
</script>
