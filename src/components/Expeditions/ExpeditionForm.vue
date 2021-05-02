<template>
  <div class="ExpeditionForm">
    <Loader v-if="!loaded"/>
    <form
      class="ExpeditionForm--form"
      id="create-expedition"
    >

      <p>
        <label for="lat">Lat</label>
        <input
          id="lat"
          v-model="lat"
          type="text"
          name="lat"
        >
      </p>

      <p>
        <label for="lon">Lon</label>
        <input
          id="lon"
          v-model="lon"
          type="text"
          name="lon"
        >
      </p>

      <p>
        <label for="place">Place</label>
        <input
          id="place"
          v-model="place"
          type="text"
          name="place"
        >
      </p>

      <p>
        <label for="team">Team</label>
        <input
          id="team"
          v-model="team"
          type="text"
          name="team"
        >
      </p>

      <p>
        <label for="date">Date</label>
        <input
          id="date"
          value="2020/10/10"
          type="date"
          name="date"
        >
      </p>

      <ActionButtons>
        <input
          class="ActionButton ActionButton--success"
          type="submit"
          @click="submit"
          value="Save"
        >
      </ActionButtons>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import ActionButtons from '@/components/core/General/ActionButtons.vue'
import SectionButtonsList from '@/components/core/General/SectionButtonsList.vue'
import Loader from '@/components/core/General/Loader.vue'
import { postExpedition } from '@/services/expeditions'

@Component({
  components: {
    SectionButton,
    SectionButtonsList,
    ActionButtons,
    Loader
  }
})
export default class ExpeditionForm extends Vue {
  protected expeditions: any = []
  protected loaded: boolean = false
  protected lat: string = ''
  protected lon: string = ''
  protected date: string = ''
  protected place: string = ''
  protected team: string = ''

  getDate () {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 10) {
      return `${year}/0${month}/${day}`
    }

    return `${year}/${month}/${day}`
  }

  async submit (e:any) {
    e.stopPropagation()
    e.preventDefault()
    const response = await postExpedition(this.lat, this.lon, this.date, this.place, this.team)

    this.$router.push('expediciones')
  }

  async beforeCreate () {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = `${position.coords.latitude}`
      this.lon = `${position.coords.longitude}`
      this.date = this.getDate()
      this.loaded = true
    })
  }
}
</script>

<style scoped lang="scss">
.ExpeditionForm--form {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  p {
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
    justify-content: space-between;
  }

  input {
    padding: .5rem;
  }
}
</style>
