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
    display: flex;
    width: 100%;
  }

  li > a {
    width: 100%;
    color: inherit;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    background-color: var(--ss--third-color);
  }
}
</style>
