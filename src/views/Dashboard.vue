<template>
  <div class="Dashboard">
    <div class="Dashboard-embedded">
      <iframe
        ref="embedMap"
        width="100%"
        height="100%"
        frameborder="0"
        src="/map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Breadcrumbs from '@/components/core/General/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs
  }
})
export default class Dashboard extends Vue {}
</script>

<style scoped lang="scss">
.Dashboard {
  height: calc(100vh - 6rem);
}

.Dashboard-embedded {
  height: 100%;
}
</style>
