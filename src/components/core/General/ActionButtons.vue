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
  margin: 1rem 2rem;

  .ActionButton {
    padding: 1rem 2rem;
    margin: .5rem 0;
    font-size: 1.5rem;
    border-radius: 5px;
    text-decoration: none;
  }

  .ActionButton--success {
    background-color: var(--ss--primary-color);
    color: white;
  }

  .ActionButton--warning {
    background-color: var(--ss--third-color);
  }
}
</style>
