import readme from "./graphicsLayer.md";
import { EGraphicsLayer } from ".";
import { argTypes } from "../common";

export default {
  title: "Layers/GraphicsLayer",
  component: EGraphicsLayer,
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

export const Default = (args: __esri.GraphicsLayerProperties) => ({
  setup() {
    return {
      geometry: {
        type: "polyline", // autocasts as new Polyline()
        paths: [
          [-111.3, 52.68],
          [-98, 49.5],
          [-93.94, 29.89]
        ]
      },
      symbol: {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        color: [226, 119, 40],
        width: 4
      }
    };
  },
  template: `<EMap basemap="topo-vector">
      <EMapView :center="[-98, 49.5]" :zoom="3"></EMapView>
      <EGraphicsLayer>
        <EGraphic :geometry="geometry" :symbol="symbol"></EGraphic>
      </EGraphicsLayer>
    </EMap>`
});
