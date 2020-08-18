mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaG1hbmFyZWVmIiwiYSI6ImNrOG1tZjRqMzBsdGszcmwzcHF5eHo4NWwifQ.rIZT4VLPb_pKv4KD6syATg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    zoom: 10,
    center: [109.344594, -0.022864]
});

const loadData = async () => {
    const res = await fetch('https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson');
    const data = await res.json();
    console.log(data.data);
}

const loadMap = async () => {
    map.on('load', function() {
        map.addLayer({
            id: 'points',
            type: 'symbol',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [109.344594, -0.022864]
                            },
                            properties: {
                                storeId: '001',
                                icon: 'shop'
                            }
                        }
                    ]
                }
            },
            layout: {
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field': '{storeId}',
                'text-font': ['Open Sans Semibold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'
            }
        });
    });
}

//loadMap();
loadData();
