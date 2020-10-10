<template>
  <ul class="SectionButtonList">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'

@Component({
  components: {
    SectionButton
  }
})
export default class SectionButtonsList extends Vue {}
</script>

<style lang="scss">
.SectionButtonList {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    width: 100%;
    position: relative;
    margin: 1rem 0;
  }

  li > a {
    width: 100%;
    padding: 1rem;
    margin: 0 2rem;
    background-color: var(--ss--white-color);
    border: 1px solid var(--ss--primary-color);
    border-radius: 5px;
    color: inherit;
    text-decoration: none;
    font-size: 1.5rem;
  }
}
</style>
