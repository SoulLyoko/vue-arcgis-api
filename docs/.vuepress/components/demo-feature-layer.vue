<template>
  <div class="mapDiv">
    <e-map basemap="gray-vector">
      <e-map-view :center="center" :zoom="zoom"></e-map-view>
      <e-feature-layer :url="url" :popupTemplate="popupTemplate"></e-feature-layer>
    </e-map>
  </div>
</template>

<script>
export default {
  name: "demo-feature-layer",
  data() {
    return {
      center: [-73.95, 40.702],
      zoom: 10,
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Marital_Status_Boundaries/FeatureServer/2",
      popupTemplate: {
        // autocasts as new PopupTemplate()
        title: "{NAME} in {COUNTY}",
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
    };
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 600px;
}
</style>
