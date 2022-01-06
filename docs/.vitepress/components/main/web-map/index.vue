// #region snippet
<template>
  <container>
    <EWebMap :portalItem="state.portalItem">
      <EMapView></EMapView>
    </EWebMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  portalItem: {
    // autocasts as new PortalItem()
    id: "e691172598f04ea8881cd2a4adaa45ba"
  }
});
</script>
// #endregion snippet

<script lang="ts">
import { EWebMap, EMapView } from "../../dynamicComponents";
export default {
  name: "demo-web-map",
  components: { EWebMap, EMapView }
};
</script>
