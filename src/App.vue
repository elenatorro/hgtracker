<template>
  <div id="app">
    <HeaderContent />
    <section class="AppContent">
      <router-view/>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HomeButton from '@/components/core/General/HomeButton.vue'
import HeaderContent from '@/components/core/Header/HeaderContent.vue'

@Component({
  components: {
    HomeButton,
    HeaderContent
  }
})
export default class App extends Vue {
  protected loading: boolean = true

  public async mounted () {
    this.loading = false
  }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';
.AppContent {
  margin-top: 6rem;
  height: 100%;
}
</style>
