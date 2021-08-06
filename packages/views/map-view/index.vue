<template>
  <div id="viewDiv">
    <slot></slot>
  </div>
</template>

<script>
import MapView from "@arcgis/core/views/MapView";

export default {
  name: "e-map-view",
  data() {
    return {};
  },
  mounted() {
    this.$once("mapInit", this.init);
  },
  methods: {
    init(map) {
      const view = new MapView({
        container: "viewDiv", // References the ID of a DOM element
        map, // References a Map instance
        ...this.$attrs
      });
      const events = [
        "blur",
        "click",
        "double-click",
        "drag",
        "focus",
        "hold",
        "immediate-click",
        "immediate-double-click",
        "key-down",
        "key-up",
        "mouse-wheel",
        "pointer-down",
        "pointer-enter",
        "pointer-leave",
        "pointer-move",
        "pointer-up"
      ];
      const otherEvents = ["layerview-create", "layerview-create-error", "layerview-destroy", "resize"];
      view.on(events, e => {
        this.$emit(e.type, e);
      });
      otherEvents.forEach(event => {
        view.on(event, e => {
          this.$emit(event, e);
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#viewDiv {
  width: 100%;
  height: 100%;
}
</style>
