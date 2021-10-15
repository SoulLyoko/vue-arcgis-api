<template>
  <div class="mapDiv">
    <e-map :basemap="basemap">
      <e-map-view :center="center" :zoom="zoom"></e-map-view>
      <e-draw ref="drawRef"></e-draw>
      <button @click="startDraw('point')">point</button>
      <button @click="startDraw('polyline')">polyline</button>
      <button @click="startDraw('polygon')">polygon</button>
      <button @click="handleClear">clear</button>
    </e-map>
  </div>
</template>

<script>
export default {
  name: "demo-draw",
  data() {
    return {
      basemap: "topo",
      center: [0, 0],
      zoom: 0
    };
  },
  methods: {
    startDraw(type) {
      this.$refs.drawRef.create(type);
    },
    handleClear() {
      this.$refs.drawRef.removeAll();
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
