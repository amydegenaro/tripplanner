const buildMarker = require('./marker');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoic2x5bmNoMzIxIiwiYSI6ImNqaW0zbTJmeDAwMGMza3A4dWNkcGl1YjQifQ.kolq-g1x0WCSLV_oxKQf_w';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]

marker.addTo(map);
