// #region snippet
<template>
  <select name="drawAction" v-model="state.drawAction">
    <option v-for="item in state.drawActions" :value="item">{{ item }}</option>
  </select>
  <button @click="onDraw">draw</button>
  <button @click="onClear">clear</button>
  <button @click="onClearAll">clearAll</button>
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
  zoom: 0,
  drawActions: ["point", "multipoint", "polyline", "polygon", "circle", "rectangle"],
  drawAction: "point"
});

const drawRef = ref();
function onDraw() {
  // 由于文档组件动态导入的原因，正常使用只需要drawRef.value.create(type)
  const { create } = getExposed(drawRef.value);
  create(state.drawAction);
}
function onClear() {
  const { clear } = getExposed(drawRef.value);
  clear(state.drawAction);
}
function onClearAll() {
  const { clear } = getExposed(drawRef.value);
  clear();
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
