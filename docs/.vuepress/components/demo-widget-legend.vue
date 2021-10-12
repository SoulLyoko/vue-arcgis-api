<template>
  <div class="mapDiv">
    <e-web-map :portalItem="portalItem" @viewInit="viewInit">
      <e-map-view></e-map-view>
      <e-widget module="Legend" position="bottom-right" :layerInfos="layerInfos"></e-widget>
    </e-web-map>
  </div>
</template>

<script>
import { EWebMap, EMapView, EWidget } from "vue-arcgis-api";

export default {
  name: "demo-widget",
  components: { EWebMap, EMapView, EWidget },
  data() {
    return {
      portalItem: { id: "05e015c5f0314db9a487a9b46cb37eca" },
      layerInfos: []
    };
  },
  methods: {
    viewInit(view, webmap) {
      view.when(() => {
        const featureLayer = webmap.layers.getItemAt(0);
        this.layerInfos = [
          {
            layer: featureLayer,
            title: "NY Educational"
          }
        ];
      });
    }
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 600px;
}
</style>
