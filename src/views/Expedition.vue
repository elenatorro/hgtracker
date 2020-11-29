<template>
  <div class="Expeditions">
    <Breadcrumbs>
      <li><router-link class="Breadcrumb-link" to="/expediciones">← expeditions</router-link></li>
    </Breadcrumbs>
    <ActionButtons>
      <router-link class="ActionButton ActionButton--success" :to="`/expedicion/${$route.params.id}/registro/new`">Start</router-link>
    </ActionButtons>
    <ExpeditionTransects />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import ExpeditionTransects from '@/components/Expeditions/ExpeditionTransects.vue'
import Breadcrumbs from '@/components/core/General/Breadcrumbs.vue'
import ActionButtons from '@/components/core/General/ActionButtons.vue'

@Component({
  components: {
    ExpeditionTransects,
    Breadcrumbs,
    ActionButtons
  }
})
export default class Expedition extends Vue {}
</script>

<style scoped lang="scss"></style>
