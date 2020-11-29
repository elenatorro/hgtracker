<template>
  <nav class="TopNavBar" :class="{'TopNavBar--open': open}">
    <ul class="TopNavBar__List">
      <li><a href="/"><img class="TopNavBar__Logo" src="/img/logos/logo.png" alt="logo 2020" /></a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopNavBar extends Vue {
  protected open: boolean = false

  protected onOpen () {
    this.open = !this.open
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.TopNavBar {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 56px;
  background-color: var(--ss--primary-color);

  .TopNavBar__List {
    display: flex;
    justify-content: center;
    padding: 0;
    height: auto;
    margin: 0;

    li {
      position: relative;
      height: 56px;
      width: 100%;
      color: var(--ss--white-color);

      a,
      a:focus,
      a:active,
      a:visited {
        color: inherit;
        text-decoration: none;
        position: absolute;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        width: 100%;
        top: 0.35rem;
      }
    }
  }
}

.TopNavBar__Logo {
    background-color: #f6f6f6;
    border-radius: 50%;
    width: 86px;
    height: 86px;
}
</style>
