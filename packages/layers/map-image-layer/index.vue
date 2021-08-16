<template>
  <div :id="$attrs.id || containerId" style="width: 100%; height: 100%">
    <slot></slot>
  </div>
</template>

<script>
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import layerMixin from "../../mixins/layers";

export default {
  name: "e-map-image-layer",
  mixins: [layerMixin],
  data() {
    return {
      module: MapImageLayer
    };
  }
};
</script>
