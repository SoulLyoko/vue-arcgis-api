// #region snippet
<template>
  <container height="600px">
    <EMap :basemap="state.basemap">
      <EMapView :center="state.center" :zoom="state.zoom"></EMapView>
      <EFeatureLayer :url="state.url" :popupTemplate="state.popupTemplate"></EFeatureLayer>
    </EMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  basemap: "gray-vector",
  center: [-73.95, 40.702],
  zoom: 10,
  url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Marital_Status_Boundaries/FeatureServer/2",
  popupTemplate: {
    // autocasts as new PopupTemplate()
    title: "{NAME} in {COUNTY}",
    // content: new Promise(resolve => this.$nextTick(() => resolve(this.$refs.content))) // promise
    content: [
      {
        // It is also possible to set the fieldInfos outside of the content
        // directly in the popupTemplate. If no fieldInfos is specifically set
        // in the content, it defaults to whatever may be set within the popupTemplate.
        type: "fields",
        fieldInfos: [
          {
            fieldName: "B12001_calc_pctMarriedE",
            label: "Married %"
          },
          {
            fieldName: "B12001_calc_numMarriedE",
            label: "People Married",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B12001_calc_numNeverE",
            label: "People that Never Married",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: "B12001_calc_numDivorcedE",
            label: "People Divorced",
            format: {
              digitSeparator: true,
              places: 0
            }
          }
        ]
      }
    ]
  }
});
</script>
// #endregion snippet

<script lang="ts">
import { EMap, EMapView, EFeatureLayer } from "../../dynamicComponents";
export default {
  name: "demo-feature-layer",
  components: { EMap, EMapView, EFeatureLayer }
};
</script>
