<template>
  <div id="app">
    <e-map>
      <e-map-view @click="mapClick" v-if="viewMode === 'map'"></e-map-view>
      <e-scene-view @click="mapClick" v-if="viewMode === 'scene'"></e-scene-view>
      <e-tile-layer :url="topoUrl"></e-tile-layer>
      <!-- <e-map-image-layer :url="topoUrl"></e-map-image-layer> -->
      <e-feature-layer v-bind="featureLayer"></e-feature-layer>
    </e-map>

    <div v-show="false">
      <div ref="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      viewMode: "map",
      map: null,
      view: null,
      center: [113.32209175845492, 23.03877955901069],
      zoom: 14,
      topoUrl: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
      streetsUrl: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
      satelliteUrl: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      content: "123123",
      featureLayer: {
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/AGP/Census/MapServer",
        title: "United States Population",
        popupTemplate: {
          title: "{states.STATE_NAME}",
          // content: new Promise(resolve => this.$nextTick(() => resolve(this.$refs.content))),
          content:
            "{expression/per_ancestry}% of the {states.POP2007} people in {states.STATE_NAME} have " +
            "Norwegian ancestry.",
          expressionInfos: [
            {
              name: "per_ancestry",
              expression: "Round( ( $feature['ancestry.norwegian'] / $feature['states.POP2007'] ) * 100, 1)"
            }
          ],
          fieldInfos: [
            {
              fieldName: "states.POP2007",
              format: {
                digitSeparator: true,
                places: 0
              }
            }
          ]
        },
        dynamicDataSource: {
          type: "data-layer",
          dataSource: {
            type: "join-table",
            leftTableSource: {
              type: "map-layer",
              mapLayerId: 3
            },
            rightTableSource: {
              type: "data-layer",
              dataSource: {
                type: "table",
                workspaceId: "CensusFileGDBWorkspaceID",
                dataSourceName: "ancestry"
              }
            },
            leftTableKey: "STATE_NAME",
            rightTableKey: "State",
            joinType: "left-outer-join"
          }
        }
      }
    };
  },
  mounted() {},
  methods: {
    mapClick(e) {
      console.log("🚀 ~ file: App.vue ~ line 28 ~ mapClick ~ e", e);
      setTimeout(() => {
        // this.content = "change";
        this.topoUrl = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer";
        this.featureLayer.popupTemplate.content = "123";
        this.viewMode = "scene";
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
