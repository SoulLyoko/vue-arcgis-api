<template>
  <div class="mapDiv">
    <e-map :basemap="basemap">
      <e-map-view :center="center" :zoom="zoom" @click="mapClick"></e-map-view>
    </e-map>
  </div>
</template>

<script>
import { EMap, EMapView } from "vue-arcgis-api";

export default {
  name: "demo-map-view",
  components: { EMap, EMapView },
  data() {
    return {
      basemap: "topo",
      center: [0, 0],
      zoom: 0
    };
  },
  methods: {
    mapClick(e) {
      console.log(e);
      alert("mapClick");
    }
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
