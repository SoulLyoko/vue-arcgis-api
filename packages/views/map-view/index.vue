<template>
  <div :id="$attrs.id || containerId" style="width: 100%; height: 100%">
    <slot></slot>
  </div>
</template>

<script>
import MapView from "@arcgis/core/views/MapView";
import viewMixin from "../../mixins/views";

export default {
  name: "e-map-view",
  mixins: [viewMixin],
  data() {
    return {
      module: MapView
    };
  }
};
</script>
