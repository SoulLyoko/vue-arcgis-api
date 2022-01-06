// #region snippet
<template>
  <container height="600px">
    <EWebMap :portalItem="state.portalItem">
      <EMapView @init="viewInit"></EMapView>
      <EWidget module="Legend" position="bottom-right" :layerInfos="state.layerInfos" v-if="state.visible"></EWidget>
      <EWidget module="Zoom" position="bottom-left" :visible="state.visible"></EWidget>
      <EWidget :position="state.customPosition">
        <button @click="togglePosition">position:{{ state.customPosition }}</button>
        <br />
        <button @click="toggleVisible">visible:{{ state.visible }}</button>
      </EWidget>
    </EWebMap>
  </container>
</template>

<script lang="ts" setup>
import { shallowReactive } from "vue";

const state = shallowReactive<Record<string, any>>({
  portalItem: { id: "05e015c5f0314db9a487a9b46cb37eca" },
  visible: true,
  customPosition: "top-right",
  layerInfos: []
});

function viewInit(view: any, map: any) {
  view.ui.components = [];
  view.when(() => {
    const featureLayer = map.layers.getItemAt(0);
    state.layerInfos.push({
      layer: featureLayer,
      title: "NYYYYY Educational Attainment"
    });
  });
}

function toggleVisible() {
  state.visible = !state.visible;
}
function togglePosition() {
  state.customPosition = state.customPosition === "top-right" ? "top-left" : "top-right";
}
</script>
// #endregion snippet

<script lang="ts">
import { EWebMap, EMapView, EWidget } from "../../dynamicComponents";
export default {
  name: "demo-widget",
  components: { EWebMap, EMapView, EWidget }
};
</script>
