<template>
  <div id="mapDiv">
    <slot></slot>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default {
  name: "e-map",
  provide() {
    return {
      mapRoot: this
    };
  },
  data() {
    return {
      map: null
    };
  },
  watch: {
    $attrs: {
      handler(val) {
        Object.keys(val).forEach(key => {
          this.map[key] = val[key];
        });
      },
      deep: true
    }
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
