// #region snippet
<template>
  <container>
    <EMap :basemap="state.basemap">
      <EMapView :center="state.center" :zoom="state.zoom" @click="mapClick"></EMapView>
    </EMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  basemap: "streets-vector",
  center: [-112, 38],
  zoom: 13
});

function mapClick(e: any) {
  alert("mapClick");
  console.log(e);
}
</script>
// #endregion snippet

<script lang="ts">
import { EMap, EMapView } from "../../dynamicComponents";
export default {
  name: "demo-map-view",
  components: { EMap, EMapView }
};
</script>
