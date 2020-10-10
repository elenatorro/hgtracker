mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmF0b3JybyIsImEiOiJjamY0NjV0bHAwaW1yMzNxaDk0ZXJ1czEzIn0.wzqn_HZKWVipIQEA17yGkw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/elenatorro/ck5ptid44010w1ipklfu4zpxq',
  center: [-1.5907300027303108, 37.960491931957876],
  zoom: 10.5
});

var polygonsLayer = {
  'id': 'murcia',
  'type': 'fill',
  'source': {
    'type': 'geojson',
    'data': murcia_json,
  },
  'layout': {},
  'paint': {
    'fill-color': '#12cad6',
    'fill-opacity': 1,
    'fill-outline-color': '#e41aa5'
  }
};

var labelsLayer = {
  'id': 'municipios',
  'type': 'symbol',
  'source': {
    'type': 'geojson',
    'data': murcia_json,
  },
  'layout': {
    'text-field': ['get', 'municipio'],
    'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
    'text-radial-offset': 0.5,
    'text-justify': 'auto'
  },
  'paint': {
    'text-color': 'white'
  }
};

map.on('load', function () {
  map.addLayer(polygonsLayer);
  //map.addLayer(labelsLayer);
});

map.flyTo({
  center: [-1.55, 38.25],
  zoom: 7.28,
  speed: 0.3,
  curve: 1
})
