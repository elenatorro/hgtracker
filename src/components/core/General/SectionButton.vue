<template>
  <router-link :to="`/${section}`" class="SectionButton" role="button">
    {{name}}
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SectionButton extends Vue {
  @Prop(String) section!: string
  @Prop(String) name!: string
}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.SectionButton {
  width: 100%;
}
</style>
