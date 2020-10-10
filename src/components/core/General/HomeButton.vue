<template>
  <router-link to="/" class="HomeButton" role="button">
    <img src="/img/logos/logo_circle.png" alt="HGTracker logo" />
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HomeButton extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.HomeButton {
  position: absolute;
  z-index: 1;
  padding: 0;
  background-color: transparent;
  top: 2rem;
  left: 8rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
}

@media (max-width: $media-query-min-width) {
  .HomeButton {
    top: 1rem;
    left: 3rem;
  }
}
</style>
