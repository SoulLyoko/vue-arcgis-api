<template>
  <div id="mapDiv">
    <slot></slot>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";

export default {
  name: "e-map",
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new Map(this.$attrs);
      this.$children.forEach(child => {
        child.$emit("mapInit", this.map);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#mapDiv {
  width: 100%;
  height: 100%;
}
</style>
