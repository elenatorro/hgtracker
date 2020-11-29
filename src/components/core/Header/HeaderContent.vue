<template>
  <header class="HeaderContent">
    <TopNavBar />
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TopNavBar from '@/components/core/General/TopNavBar.vue'

@Component({
  components: {
    TopNavBar
  }
})
export default class HeaderContent extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.HeaderContent {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--ss--secondary-color);
  z-index: 10;
}

.HeaderTitle {
  margin-top: 0;
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: 1.2rem;
    color: var(--ss--primary-color)
  }

  img {
    width: 5em;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
