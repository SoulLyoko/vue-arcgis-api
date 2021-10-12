<template>
  <div class="mapDiv">
    <e-map :basemap="basemap">
      <e-map-view :center="center" :zoom="zoom"></e-map-view>
    </e-map>
  </div>
</template>

<script>
import { EMap, EMapView } from "vue-arcgis-api";

export default {
  name: "demo-map",
  components: { EMap, EMapView },
  data() {
    return {
      basemap: "topo",
      center: [0, 0],
      zoom: 0
    };
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
