import readme from "./featureLayer.md";
import { EFeatureLayer } from ".";

export default {
  title: "Layers/FeatureLayer",
  component: EFeatureLayer,
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  },
  argTypes: {}
};

export const Default = (args: __esri.FeatureLayerProperties) => ({
  setup() {
    return {
      url: args.url,
      popupTemplate: args.popupTemplate
    };
  },
  template: `<EMap basemap="gray-vector">
      <EMapView :center="[-73.95, 40.702]" :zoom="10"></EMapView>
      <EFeatureLayer :url="url" :popupTemplate="popupTemplate"></EFeatureLayer>
    </EMap>`
});
Default.args = {
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
};
