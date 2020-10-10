<template>
  <div class="ExpeditionList">
    <Loader v-if="!loaded"/>
    <SectionButtonsList>
      <li v-for="expedition in expeditions" :key="`${expedition.id_expedicion}-${expedition.fecha}`">
        <SectionButton :section="`expedicion/${expedition.id_expedicion}`" :name="`Ex ${expedition.id_expedicion} - ${expedition.fecha}`"/>
      </li>
    </SectionButtonsList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import SectionButtonsList from '@/components/core/General/SectionButtonsList.vue'
import Loader from '@/components/core/General/Loader.vue'
import { getExpeditions } from '@/services/expeditions'

@Component({
  components: {
    SectionButton,
    SectionButtonsList,
    Loader
  }
})
export default class Expeditions extends Vue {
  protected expeditions: any = []
  protected loaded: boolean = false

  async beforeCreate () {
    const response = await getExpeditions()
    const data = await response.json()
    this.expeditions = data.rows
    this.loaded = true
  }
}
</script>

<style scoped lang="scss"></style>
