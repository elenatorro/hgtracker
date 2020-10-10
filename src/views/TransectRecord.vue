<template>
  <div class="TransectRecord">
    <TransectForm />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TransectForm from '@/components/Expeditions/TransectForm.vue'

@Component({
  components: {
    TransectForm
  }
})
export default class TransectRecord extends Vue {}
</script>

<style scoped lang="scss"></style>
