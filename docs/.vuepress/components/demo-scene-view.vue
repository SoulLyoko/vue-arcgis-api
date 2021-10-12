<template>
  <div class="mapDiv">
    <e-map :basemap="basemap">
      <e-scene-view :center="center" :zoom="zoom" @click="mapClick"></e-scene-view>
    </e-map>
  </div>
</template>

<script>
import { EMap, ESceneView } from "vue-arcgis-api";

export default {
  name: "demo-scene-view",
  components: { EMap, ESceneView },
  data() {
    return {
      basemap: "hybrid",
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
