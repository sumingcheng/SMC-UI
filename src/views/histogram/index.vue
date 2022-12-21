<template>
  <div class="bgBar">
    <div class="bar" :style="cssVars"></div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        height: 20,
        bgColor: '#000',
        angle: 20,
        maximum: 100,
        minimum: 20,
      })
    },
  },
  computed: {
    cssVars() {
      console.log(this.options.width);
      return {
        '--width': this.options.width + 'px',
        '--height': this.options.height + 'px',
        '--background-color': this.options.bgColor,
        '--angle': this.options.angle + 'px',
        '--barColor': this.options.barColor,
      };
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bar {
  position: relative;
  top: 0;
  left: 0;
  width: var(--width);
  height: var(--height);
  background-color: var(--background-color);
  border-top-right-radius: var(--angle);
  border-bottom-right-radius: var(--angle);
}

.bgBar {
  width: 100%;
  height: var(--height);
  background-color: var(--barColor);
}
</style>
