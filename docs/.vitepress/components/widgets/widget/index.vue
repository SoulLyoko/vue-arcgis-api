// #region snippet
<template>
  <container height="600px">
    <EWebMap :portalItem="state.portalItem">
      <EMapView @init="viewInit"></EMapView>
      <EWidget
        module="Legend"
        position="bottom-right"
        :layerInfos="state.layerInfos"
        :visible="state.visible"
      ></EWidget>
      <EWidget module="Zoom" position="top-right"></EWidget>
      <EWidget position="top-right">
        <button @click="toggleVisible">custom</button>
      </EWidget>
    </EWebMap>
  </container>
</template>

<script lang="ts" setup>
import { shallowReactive } from "vue";

const state = shallowReactive<Record<string, any>>({
  portalItem: { id: "05e015c5f0314db9a487a9b46cb37eca" },
  visible: true,
  layerInfos: []
});

function viewInit(view: any, map: any) {
  view.when(() => {
    const featureLayer = map.layers.getItemAt(0);
    state.layerInfos.push({
      layer: featureLayer,
      title: "NY Educational Attainment"
    });
  });
}

function toggleVisible() {
  state.visible = !state.visible;
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
