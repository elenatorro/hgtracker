export async function getExpeditions () {
  const API_URL = `${process.env.VUE_APP_API_URL}sql?api_key=${process.env.VUE_APP_KEY_EXPEDICION}&q=SELECT id_expedicion, to_char("fecha", 'YYYY/MM/DD') as fecha FROM expedicion WHERE id_expedicion IS NOT NULL GROUP BY id_expedicion, fecha ORDER BY fecha DESC`
  return fetch(API_URL)
}

export async function getExpedition (id: string) {
  const API_URL = `${process.env.VUE_APP_API_URL}sql?api_key=${process.env.VUE_APP_KEY_EXPEDICION}&q=SELECT DISTINCT id_transecto, to_char("fecha", 'YYYY/MM/DD') as fecha FROM avistamientos WHERE id_expedicion = ${id} GROUP BY id_transecto, fecha ORDER BY fecha DESC`
  return fetch(API_URL)
}

export async function getExpeditionCount () {
  const API_URL = `${process.env.VUE_APP_API_URL}sql?api_key=${process.env.VUE_APP_KEY_EXPEDICION}&q=SELECT count(DISTINCT id_expedicion) as count FROM expedicion WHERE id_expedicion IS NOT NULL`
  return fetch(API_URL)
}

export async function getTrackCount (id: string) {
  const API_URL = `${process.env.VUE_APP_API_URL}sql?api_key=${process.env.VUE_APP_KEY_EXPEDICION}&q=SELECT count(DISTINCT concat(id_expedicion, '-', id_transecto)) as count FROM avistamientos WHERE id_expedicion = ${id}`
  return fetch(API_URL)
}

export async function getTransect (id: string, tid:string) {
  const API_URL = `${process.env.VUE_APP_API_URL}sql?api_key=${process.env.VUE_APP_KEY_EXPEDICION}&q=SELECT distancia, fondo, profundidad, especie, talla, sexo, buzo, to_char("fecha", 'YYYY/MM/DD HH24:MI:SS') as hora, lon, lat FROM avistamientos WHERE id_expedicion = ${id} AND id_transecto = ${tid} ORDER BY hora DESC`
  return fetch(API_URL)
}

export async function postExpedition (lat: string, lon: string, date: string, place: string, team: string) {
  const response = await (await getExpeditionCount()).json()
  const id = response.rows[0].count + 1
  const API_URL = `${process.env.VUE_APP_API_URL}sql?api_key=${process.env.VUE_APP_KEY_EXPEDICION}&q=INSERT INTO expedicion (the_geom, id_expedicion, lat, lon, fecha, localidad, equipo) VALUES (ST_SetSRID(ST_Point(${lon}, ${lat}), 4326), ${id}, ${lat}, ${lon}, '${date}', '${place}', '${team}')`
  return fetch(API_URL, { method: 'POST' })
}

export async function postView (id: string, tid: string, fondo: string, profundidad: number, especie: string, talla: number, sexo: string, buzo: string, lat: string, lon: string, fecha: string) {
  const API_URL = `${process.env.VUE_APP_API_URL}sql?api_key=${process.env.VUE_APP_KEY_EXPEDICION}&q=INSERT INTO avistamientos (the_geom, id_expedicion, id_transecto, fondo, profundidad, especie, talla, sexo, buzo, lat, lon, fecha) VALUES (ST_SetSRID(ST_Point(${lon}, ${lat}), 4326), ${id}, ${tid}, '${fondo}', ${profundidad}, '${especie}', '${talla}', '${sexo}', '${buzo}', ${lat}, ${lon}, '${fecha}')`
  return fetch(API_URL, { method: 'POST' })
}
