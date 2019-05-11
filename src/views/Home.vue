<template>
  <div class="home">
    <MainScene/>
    <div class="home__info">
      <span>Controlls:</span><br/>
      <span>  Left Arrow - Move Left</span><br/>
      <span>  Right Arrow - Move Right</span><br/>
      <span>  Spacebar - Jump</span><br/>
    </div>
  </div>
</template>

<script>

import MainScene from '@/components/main-scene.vue';

export default {
  name: 'home',
  components: {
    MainScene,
  },
};
</script>

<style scoped lang="stylus">
.home
  display grid
  grid-template-rows auto 200px
  width 100%
  height 100vh
  &__info
    padding 32px 64px
    text-align left
</style>
