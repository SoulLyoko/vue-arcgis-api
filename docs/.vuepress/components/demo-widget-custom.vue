<template>
  <div class="mapDiv">
    <e-web-map :portalItem="portalItem">
      <e-map-view></e-map-view>
      <e-widget position="top-right">
        <button>custom</button>
      </e-widget>
    </e-web-map>
  </div>
</template>

<script>
import { EWebMap, EMapView, EWidget } from "vue-arcgis-api";

export default {
  name: "demo-widget",
  components: { EWebMap, EMapView, EWidget },
  data() {
    return {
      portalItem: { id: "05e015c5f0314db9a487a9b46cb37eca" }
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
