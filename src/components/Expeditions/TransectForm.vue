<template>
  <div class="TransectForm">
    <Loader v-if="!loaded"/>
    <div class="Notification" v-if="showNotification">
      Añadido ✓
    </div>
    <form class="TransectForm--form" id="create-transect">

      <p>
        <label for="lat">Lat</label>
        <input id="lat" v-model="lat" type="text" name="lat" :disabled=isAuto>
      </p>

      <p>
        <label for="lon">Lon</label>
        <input id="lon" v-model="lon" type="text" name="lon" :disabled=isAuto>
      </p>

      <p>
        <label for="fondo">Seabed</label>

        <select v-model="fondo" id="fondo">
          <option value="CAD">CAD</option>
          <option value="CAR">CAR</option>
          <option value="PRM">PRM</option>
          <option value="CYM">CYM</option>
          <option value="ROC">ROC</option>
          <option value="ALG">ALG</option>
          <option value="ARE">ARE</option>
          <option value="FAN">FAN</option>
        </select>
      </p>

      <p>
        <label for="profundidad">Depth (m.)</label>
        <input id="profundidad" v-model="profundidad" type="number" name="profundidad">
      </p>

      <p>
        <label for="especie">Specie</label>
        <input id="especie" v-model="especie" type="text" name="especie">
      </p>

      <p>
        <label for="talla">Size</label>
        <input id="talla" v-model="talla" type="number" name="talla">
      </p>

      <p>
        <label for="sexo">Sex</label>
        <select v-model="sexo" id="sexo">
          <option value="H">H</option>
          <option value="M">M</option>
          <option value="M(preñado)">M(pregnant)</option>
        </select>
      </p>

      <p>
        <label for="team">Diver</label>
        <input id="buzo" v-model="buzo" type="text" name="buzo">
      </p>

      <p>
        <label for="fecha">Date</label>
        <input id="fecha" v-model="fecha" type="string" name="fecha" v-if=isAuto disabled>
        <input id="fecha" v-model="fecha" type="string" name="fecha" v-if=!isAuto>
      </p>
    </form>

    <ActionButtons>
      <button class="ActionButton ActionButton--success" @click="submit" type="submit">Add</button>
      <button class="ActionButton ActionButton--warning" @click="finish">Finish</button>
    </ActionButtons>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import ActionButtons from '@/components/core/General/ActionButtons.vue'
import SectionButtonsList from '@/components/core/General/SectionButtonsList.vue'
import Loader from '@/components/core/General/Loader.vue'
import { postView, postTransect, getTrackCount } from '@/services/expeditions'

@Component({
  components: {
    SectionButton,
    SectionButtonsList,
    ActionButtons,
    Loader
  }
})
export default class TransectForm extends Vue {
  @Prop(String) mode!: string

  protected loaded: boolean = false
  protected lat: string = ''
  protected lon: string = ''
  protected fecha: string = ''
  protected profundidad: number = 0
  protected especie: string = 'HG'
  protected fondo: string = 'FAN'
  protected talla: number = 0
  protected sexo: string = 'M'
  protected buzo: string = '-'
  protected transectId: string = ''
  protected intervalId: number = 0
  protected autoIntervalId: number = 0
  protected showNotification: boolean = false

  get isAuto () {
    return this.$props.mode !== 'add'
  }

  getDate () {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    if (month < 10) {
      return `${year}-0${month}/${day} ${hours}:${minutes}:${seconds}`
    }

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
  }

  async submit (e:any) {
    e.stopPropagation()
    e.preventDefault()

    const response = await postView(
      `${this.$route.params.id}`,
      this.transectId,
      this.fondo,
      this.profundidad,
      this.especie,
      this.talla,
      this.sexo,
      this.buzo,
      this.lat,
      this.lon,
      this.fecha
    )

    const res = await response.json()

    if (!res.error) {
      this.showNotification = true

      setTimeout(() => {
        this.showNotification = false
      }, 5000)
    }
  }

  finish (e:any) {
    e.stopPropagation()
    e.preventDefault()
    this.$router.push(`/expedicion/${this.$route.params.id}`)
  }

  setData () {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = `${position.coords.latitude}`
      this.lon = `${position.coords.longitude}`
      this.fecha = this.getDate()
    })
  }

  async sendData () {
    const response = await postTransect(
      `${this.$route.params.id}`,
      this.transectId,
      this.lat,
      this.lon,
      this.getDate()
    )
  }

  async beforeCreate () {
    const UPDATE_INTERVAL_MS = 1000
    const trackCount = await getTrackCount(this.$route.params.id)
    const response = await trackCount.json()
    const transectId = this.$props.mode && this.$props.mode === 'new' ? response.rows[0].count + 1 : response.rows[0].count

    if (this.isAuto) {
      this.setData()
      this.intervalId = setInterval(this.setData, UPDATE_INTERVAL_MS)
      this.autoIntervalId = setInterval(this.sendData, 60 * 60 * 60)
      this.sendData()
    } else {
      this.fecha = this.getDate()
    }

    this.loaded = true
    this.transectId = `${transectId}`
  }

  beforeDestroy () {
    clearInterval(this.intervalId)
    clearInterval(this.autoIntervalId)
  }
}
</script>

<style scoped lang="scss">
.TransectForm--form {
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

.Notification {
  width: 75vw;
  position: fixed;
  text-align: right;
  top: 0;
  right: 0;
  z-index: 20;
  padding: 2rem;
  background-color:#97f5f5;
}
</style>
