// #region snippet
<template>
  <container>
    <EMap :basemap="state.basemap">
      <EMapView :center="state.center" :zoom="state.zoom"></EMapView>
      <EGraphicsLayer>
        <EGraphic :geometry="state.geometry" :symbol="state.symbol" :attributes="state.attributes"></EGraphic>
      </EGraphicsLayer>
    </EMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";

const state = reactive({
  basemap: "topo",
  center: [-98, 49.5],
  zoom: 3,
  geometry: {
    type: "polyline", // autocasts as new Polyline()
    paths: [
      [-111.3, 52.68],
      [-98, 49.5],
      [-93.94, 29.89]
    ]
  },
  symbol: {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: [226, 119, 40],
    width: 4
  },
  attributes: {
    Name: "Keystone Pipeline",
    Owner: "TransCanada"
  }
});
</script>
// #endregion snippet

<script lang="ts">
import { EMap, EMapView, EGraphicsLayer, EGraphic } from "../../dynamicComponents";
export default {
  name: "demo-graphics-layer",
  components: { EMap, EMapView, EGraphicsLayer, EGraphic }
};
</script>
