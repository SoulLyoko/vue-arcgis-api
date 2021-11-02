// #region snippet
<template>
  <container>
    <EMap :basemap="state.basemap">
      <ESceneView :center="state.center" :zoom="state.zoom" @click="mapClick"></ESceneView>
    </EMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  basemap: "topo",
  center: [0, 0],
  zoom: 0
});

function mapClick(e: any) {
  alert("mapClick");
  console.log(e);
}
</script>
// #endregion snippet

<script lang="ts">
import { EMap, ESceneView } from "../../dynamicComponents";
export default {
  name: "demo-scene-view",
  components: { EMap, ESceneView }
};
</script>
