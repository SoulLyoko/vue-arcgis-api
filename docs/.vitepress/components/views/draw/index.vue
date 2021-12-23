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
  // 由于文档组件动态导入的原因，正常使用只需要drawRef.value.create(type)
  const { create } = getExposed(drawRef.value);
  create(type);
}
function handleClear(type?: string) {
  const { clear } = getExposed(drawRef.value);
  clear(type);
}

function getExposed(component: any) {
  return component?._.subTree.component.exposed;
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
