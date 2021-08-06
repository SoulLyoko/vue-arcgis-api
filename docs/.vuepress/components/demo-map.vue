<template>
  <div class="mapDiv">
    <e-map :basemap="basemap">
      <e-map-view :center="center" :zoom="zoom" @click="mapClick"></e-map-view>
    </e-map>
  </div>
</template>

<script>
export default {
  name: "demo-map",
  data() {
    return {
      basemap: "topo",
      center: [0, 0],
      zoom: 0
    };
  },
  methods: {
    mapClick(e) {
      this.basemap = "streets";
      this.zoom = 12;
      this.center = [113, 23];
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
