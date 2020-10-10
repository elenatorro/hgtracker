<template>
  <div class="Home">
    <SectionButtonsList>
      <li><SectionButton section='expediciones' name="Expediciones" /></li>
      <li><SectionButton section='buzos' name="Buzos" /></li>
      <li><SectionButton section='mapa' name="Mapa" /></li>
    </SectionButtonsList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import SectionButtonsList from '@/components/core/General/SectionButtonsList.vue'

@Component({
  components: {
    SectionButton,
    SectionButtonsList
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.Home {
  position: relative;
}
</style>
