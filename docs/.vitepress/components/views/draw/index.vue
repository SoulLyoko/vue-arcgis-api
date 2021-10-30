// #region snippet
<template>
  <button @click="startDraw('point')">drawPoint</button>
  <button @click="startDraw('polyline')">drawPolyline</button>
  <button @click="startDraw('polygon')">drawPolygon</button>
  <button @click="handleClear('point')">clearPoint</button>
  <button @click="handleClear('polyline')">clearPolyline</button>
  <button @click="handleClear('polygon')">clearPolygon</button>
  <button @click="handleClear()">clearAll</button>
  <container>
    <EMap :basemap="state.basemap">
      <EMapView :center="state.center" :zoom="state.zoom"></EMapView>
      <EDraw ref="drawRef"></EDraw>
    </EMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const state = reactive({
  basemap: "topo",
  center: [0, 0],
  zoom: 0
});

const drawRef = ref();
function startDraw(type: string) {
  const { create } = drawRef.value?._.subTree.component.exposed;
  create(type);
}
function handleClear(type?: string) {
  const { clear } = drawRef.value?._.subTree.component.exposed;
  clear(type);
}
</script>
// #endregion snippet

<script lang="ts">
import { EMap, EMapView, EDraw } from "../../dynamicComponents";
export default {
  name: "demo-draw",
  components: { EMap, EMapView, EDraw }
};
</script>
