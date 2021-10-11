<template>
  <div class="mapDiv">
    <label><input type="radio" value="World_Topo_Map" v-model="radio" />World_Topo_Map</label>
    <label><input type="radio" value="World_Street_Map" v-model="radio" />World_Street_Map</label>
    <label><input type="radio" value="World_Imagery" v-model="radio" />World_Imagery</label>
    <e-map>
      <e-map-view :center="center" :zoom="zoom"></e-map-view>
      <e-map-image-layer :url="url"></e-map-image-layer>
    </e-map>
  </div>
</template>

<script>
export default {
  name: "demo-map-image-layer",
  data() {
    return {
      center: [0, 0],
      zoom: 0,
      radio: "World_Topo_Map"
    };
  },
  computed: {
    url() {
      return `https://services.arcgisonline.com/ArcGIS/rest/services/${this.radio}/MapServer`;
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
