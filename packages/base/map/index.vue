<template>
  <div id="mapDiv" style="width: 100%; height: 100%">
    <slot></slot>
  </div>
</template>

<script>
// import "@arcgis/core/assets/esri/themes/light/main.css";
import Map from "@arcgis/core/Map";
// import esriConfig from "@arcgis/core/config.js";
// esriConfig.assetsPath = "/assets";
// import { loadModules } from "esri-loader";

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
    async initMap() {
      // const [Map] = await loadModules(["esri/map"]);
      this.map = new Map(this.$attrs);
      this.$children.forEach(child => {
        child.$emit("mapInit", this.map);
      });
    }
  }
};
</script>
