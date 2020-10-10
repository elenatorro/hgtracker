<template>
  <div class="Loader"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Loader extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';
.Loader {
  margin: 0 auto;
  border: 16px solid var(--ss--secondary-color);
  border-top: 16px solid var(--ss--primary-color);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
