<template>
  <div class="Transect">
    <Breadcrumbs>
      <li><router-link class="Breadcrumb-link" :to="`/expedicion/${$route.params.id}`">← expedition</router-link></li>
    </Breadcrumbs>
    <ActionButtons>
      <router-link class="ActionButton ActionButton--success" :to="`/expedicion/${$route.params.id}/registro/continue`">Resume</router-link>
    </ActionButtons>
    <ActionButtons>
      <router-link class="ActionButton ActionButton--success" :to="`/expedicion/${$route.params.id}/registro/add`">New</router-link>
    </ActionButtons>
    <TransectList />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TransectList from '@/components/Expeditions/TransectList.vue'
import Breadcrumbs from '@/components/core/General/Breadcrumbs.vue'
import ActionButtons from '@/components/core/General/ActionButtons.vue'

@Component({
  components: {
    TransectList,
    Breadcrumbs,
    ActionButtons
  }
})
export default class Transect extends Vue {}
</script>

<style scoped lang="scss">
.Transect {
  max-width: 100%;
  overflow: scroll;
  height: calc(100vh - 6rem);
}
</style>
