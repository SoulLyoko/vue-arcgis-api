// #region snippet
<template>
  <label><input type="radio" value="World_Topo_Map" v-model="state.radio" />World_Topo_Map</label>
  <label><input type="radio" value="World_Street_Map" v-model="state.radio" />World_Street_Map</label>
  <label><input type="radio" value="World_Imagery" v-model="state.radio" />World_Imagery</label>
  <container>
    <EMap>
      <EMapView :center="state.center" :zoom="state.zoom"></EMapView>
      <ETileLayer :url="url"></ETileLayer>
    </EMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";

const state = reactive({
  basemap: "topo",
  center: [0, 0],
  zoom: 0,
  radio: "World_Topo_Map"
});

const url = computed(() => {
  return `https://services.arcgisonline.com/ArcGIS/rest/services/${state.radio}/MapServer`;
});
</script>
// #endregion snippet

<script lang="ts">
import { EMap, EMapView, ETileLayer } from "../../dynamicComponents";
export default {
  name: "demo-tile-layer",
  components: { EMap, EMapView, ETileLayer }
};
</script>
