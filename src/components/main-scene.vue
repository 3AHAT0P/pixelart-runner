<template>
  <div class="scene"></div>
</template>

<script>
import { Scene } from '@/lib';

export default {
  name: 'MainScene',
  props: {},
  data() {
    return {
      scene: null,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.scene = new Scene(this.$el);
    });
  },
};
</script>

<style scoped lang="stylus">
.scene
  width 100%
  overflow hidden
</style>
