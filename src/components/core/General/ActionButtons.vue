<template>
  <div class="ActionButtons">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ActionButtons extends Vue {}
</script>

<style lang="scss">
.ActionButtons {
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 1rem 2rem;

  .ActionButton {
    padding: 1rem 2rem;
  }

  .ActionButton--success {
    background-color: var(--ss--primary-color);
    color: white;
  }
}
</style>
