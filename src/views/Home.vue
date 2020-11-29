<template>
  <div class="Home">
    <SectionButtonsList>
      <li><SectionButton section='expediciones' name="Tracker" /></li>
      <li><SectionButton section='dashboard' name="Dashboard" /></li>
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
