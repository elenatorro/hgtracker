<template>
  <ul class="Breadcrumbs">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Breadcrumbs extends Vue {}
</script>

<style lang="scss">
.Breadcrumbs {
  display: flex;
  padding: 0 2rem;

  li {
    padding-right: 1rem;
  }

  li > a {
    color: inherit;
  }
}
</style>
