import readme from "./mapImageLayer.md";
import { EMapImageLayer } from ".";

export default {
  title: "Layers/MapImageLayer",
  component: EMapImageLayer,
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  },
  argTypes: {}
};

export const Default = (args: __esri.MapImageLayerProperties) => ({
  setup() {
    return {
      url: args.url
    };
  },
  template: `<EMap>
      <EMapView></EMapView>
      <EMapImageLayer :url="url"></EMapImageLayer>
    </EMap>`
});
Default.args = {
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer"
};

export const PortalItem = (args: __esri.MapImageLayerProperties) => ({
  setup() {
    return {
      portalItem: args.portalItem
    };
  },
  template: `<EMap>
      <EMapView></EMapView>
      <EMapImageLayer :portalItem="portalItem"></EMapImageLayer>
    </EMap>`
});
PortalItem.args = {
  portalItem: {
    // autocasts as esri/portal/PortalItem
    id: "8444e275037549c1acab02d2626daaee"
  }
};
