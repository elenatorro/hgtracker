<template>
  <div class="ExpeditionList">
    <SectionButtonsList>
      <li v-for="(track, index) in tracks" :key="`${index}`">
        <SectionButton :section="`expedicion/${$route.params.id}/transecto/${track.id_transecto}`" :name="`Transect ${track.id_transecto} - ${track.fecha}`"/>
      </li>
    </SectionButtonsList>
    <Loader v-if="!loaded"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import SectionButtonsList from '@/components/core/General/SectionButtonsList.vue'
import Loader from '@/components/core/General/Loader.vue'
import { getExpedition } from '@/services/expeditions'

@Component({
  components: {
    SectionButton,
    SectionButtonsList,
    Loader
  }
})
export default class Expeditions extends Vue {
  protected tracks: any = []
  protected loaded: boolean = false

  async beforeCreate () {
    const expeditionId = this.$route.params.id
    const response = await getExpedition(expeditionId)
    const data = await response.json()
    this.tracks = data.rows
    this.loaded = true
  }
}
</script>

<style scoped lang="scss"></style>
