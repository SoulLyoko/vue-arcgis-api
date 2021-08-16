<template>
  <div :id="$attrs.id || containerId" style="width: 100%; height: 100%">
    <slot></slot>
  </div>
</template>

<script>
import SceneView from "@arcgis/core/views/SceneView";
import viewMixin from "../../mixins/views";

export default {
  name: "e-scene-view",
  mixins: [viewMixin],
  data() {
    return {
      module: SceneView
    };
  }
};
</script>
