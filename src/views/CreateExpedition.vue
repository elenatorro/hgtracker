<template>
  <div class="CreateExpedition">
    <Breadcrumbs>
      <li><router-link class="Breadcrumb-link" to="/expediciones">← expeditions</router-link></li>
    </Breadcrumbs>
    <ExpeditionForm />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import ExpeditionTransects from '@/components/Expeditions/ExpeditionTransects.vue'
import ExpeditionForm from '@/components/Expeditions/ExpeditionForm.vue'
import Breadcrumbs from '@/components/core/General/Breadcrumbs.vue'
import ActionButtons from '@/components/core/General/ActionButtons.vue'

@Component({
  components: {
    Breadcrumbs,
    ActionButtons,
    ExpeditionForm
  }
})
export default class CreateExpedition extends Vue {}
</script>

<style scoped lang="scss"></style>
