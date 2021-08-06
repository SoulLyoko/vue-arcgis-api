<template>
  <div id="app">
    <e-map>
      <e-map-view :center="center" :zoom="zoom" @click="mapClick"></e-map-view>
      <e-tile-layer :url="topoUrl"></e-tile-layer>
      <!-- <e-map-image-layer :url="tileLayerUrl"></e-map-image-layer> -->
    </e-map>
  </div>
</template>

<script>
import { EMap, EMapView, ETileLayer, EMapImageLayer } from "../packages";

export default {
  name: "App",
  components: { EMap, EMapView, ETileLayer, EMapImageLayer },
  data() {
    return {
      map: null,
      view: null,
      center: [113.32209175845492, 23.03877955901069],
      zoom: 14,
      topoUrl: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
      streetsUrl: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
      satelliteUrl: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
    };
  },
  mounted() {},
  methods: {
    mapClick(e) {
      console.log("🚀 ~ file: App.vue ~ line 28 ~ mapClick ~ e", e);
    }
  }
};
</script>

<style lang="scss">
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
