<template>
  <div class="TransectList--container">
  <Loader v-if="!loaded"/>
  <table class="TransectList">
    <tr>
      <th>Distancia</th>
      <th>Fondo</th>
      <th>Profundidad</th>
      <th>Especie</th>
      <th>Talla</th>
      <th>Sexo</th>
      <th>Buzo</th>
      <th>Hora</th>
      <th>Lon</th>
      <th>Lat</th>
    </tr>
    <tr v-for="(track, index) in tracks" :key="index">
      <td>{{track.distancia}}</td>
      <td>{{track.fondo}}</td>
      <td>{{track.profundidad}}</td>
      <td>{{track.especie}}</td>
      <td>{{track.talla}}</td>
      <td>{{track.sexo}}</td>
      <td>{{track.buzo}}</td>
      <td>{{track.hora}}</td>
      <td>{{track.lon}}</td>
      <td>{{track.lat}}</td>
    </tr>
  </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SectionButton from '@/components/core/General/SectionButton.vue'
import SectionButtonsList from '@/components/core/General/SectionButtonsList.vue'
import Loader from '@/components/core/General/Loader.vue'
import { getTransect } from '@/services/expeditions'

@Component({
  components: {
    SectionButton,
    SectionButtonsList,
    Loader
  }
})
export default class TransectList extends Vue {
  protected tracks: any = []
  protected loaded: boolean = false
  protected expeditionId: string = ''
  protected transectId: string = ''

  async beforeCreate () {
    const response = await getTransect(this.$route.params.id, this.$route.params.tid)
    const data = await response.json()
    this.tracks = data.rows
    this.loaded = true
  }
}
</script>

<style scoped lang="scss">
.TransectList--container {
  overflow-x: scroll;
}

.TransectList {
  margin: 0 auto;

  td, th {
    padding: 1rem;
  }

  th {
    border-bottom: 1px solid black;
  }

  tr:nth-child(even) {
    background-color: white;
  }
}
</style>
