<template>
  <div :id="$attrs.id || containerId" style="width: 100%; height: 100%">
    <slot></slot>
  </div>
</template>

<script>
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import layerMixin from "../../mixins/layers";

export default {
  name: "e-feature-layer",
  mixins: [layerMixin],
  data() {
    return {
      module: FeatureLayer,
      otherEvents: ["edits"]
    };
  }
};
</script>
