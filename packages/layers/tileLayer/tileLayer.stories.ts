import readme from "./tileLayer.md";
import { ETileLayer } from ".";
import { argTypes } from "../common";

export default {
  title: "Layers/TileLayer",
  component: ETileLayer,
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  },
  argTypes: {
    ...argTypes
  }
};

export const Default = (args: __esri.TileLayerProperties) => ({
  setup() {
    return {
      url: args.url
    };
  },
  template: `<EMap>
      <EMapView></EMapView>
      <ETileLayer :url="url"></ETileLayer>
    </EMap>`
});
Default.args = {
  url: "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"
};
