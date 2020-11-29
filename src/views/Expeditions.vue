<template>
  <div class="Expeditions">
    <Breadcrumbs>
      <li><router-link class="Breadcrumb-link" to="/">← back</router-link></li>
    </Breadcrumbs>
    <ActionButtons>
      <router-link to="nueva-expedicion" class="ActionButton ActionButton--success">New</router-link>
    </ActionButtons>
    <ExpeditionsList />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import Breadcrumbs from '@/components/core/General/Breadcrumbs.vue'
import ActionButtons from '@/components/core/General/ActionButtons.vue'
import ExpeditionsList from '@/components/Expeditions/ExpeditionsList.vue'

@Component({
  components: {
    ExpeditionsList,
    Breadcrumbs,
    ActionButtons
  }
})
export default class Expeditions extends Vue {}
</script>

<style scoped lang="scss"></style>
