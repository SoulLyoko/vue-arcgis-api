<template>
  <div id="mapDiv" style="width: 100%; height: 100%">
    <slot></slot>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import emitter from "../../utils/emitter";

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
      this.map = new Map(this.$attrs);
      emitter.emit("mapInit", this.map);
      this.$emit("init", this.map);
    }
  }
};
</script>
