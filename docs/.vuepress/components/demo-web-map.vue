<template>
  <div class="mapDiv">
    <e-web-map :portalItem="portalItem">
      <e-map-view></e-map-view>
    </e-web-map>
  </div>
</template>

<script>
export default {
  name: "demo-web-map",
  data() {
    return {
      portalItem: { id: "e691172598f04ea8881cd2a4adaa45ba" }
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
