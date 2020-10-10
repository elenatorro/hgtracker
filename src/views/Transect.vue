<template>
  <div class="Transect">
    <Breadcrumbs>
      <li><router-link class="Breadcrumb-link" :to="`/expedicion/${$route.params.id}`">← expedición</router-link></li>
    </Breadcrumbs>
    <div class="ActionButtons"></div>
    <TransectList />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TransectList from '@/components/Expeditions/TransectList.vue'
import Breadcrumbs from '@/components/core/General/Breadcrumbs.vue'

@Component({
  components: {
    TransectList,
    Breadcrumbs
  }
})
export default class Transect extends Vue {}
</script>

<style scoped lang="scss">
.Transect {
  max-width: 100%;
  overflow: scroll;
}
</style>
