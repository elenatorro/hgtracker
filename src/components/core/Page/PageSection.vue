<template>
  <section class="PageSection"
    :class="{
      'PageSection__Right': direction === 'right',
      'PageSection__Left': direction === 'left'
    }">
    <h2>{{title}}</h2>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PageSection extends Vue {
  @Prop(String) title!: string
  @Prop(String) direction!: string
}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.PageSection {
  background-color: white;
  position: relative;
}

h2 {
  position: absolute;
  background-color: var(--ss--third-color);
  color: var(--ss--primary-color);
  padding: 1rem 4rem;
  top: 0;
  width: 50%;
}

p {
  margin: 1rem 0;
  line-height: 1.5rem;
}

.PageSection__Left {
  padding: 6rem 16rem 4rem 8rem;
  margin: 0 0 4rem 8rem;

  h2 {
    left: -8rem;
  }
}

.PageSection__Right {
  padding: 6rem 8rem 4rem 16rem;
  margin: 0 8rem 4rem 0;

  h2 {
    right: -8rem;
  }
}

@media (max-width: $media-query-min-width) {
  .PageSection__Left {
    padding: 6rem 2rem;
    margin: 0 0 2rem 2rem;

    h2 {
      box-sizing: border-box;
      padding: 1rem;
      right: 8rem;
      left: -2rem;
      width: auto;
    }
  }

  .PageSection__Right {
    padding: 6rem 4rem;
    margin: 0 2rem 2rem 0;

    h2 {
      box-sizing: border-box;
      padding: 1rem;
      left: 8rem;
      right: -2rem;
      width: auto;
    }
  }
}
</style>
