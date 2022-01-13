import readme from "./graphic.md";
import { EGraphic } from ".";

export default {
  title: "Main/Graphic",
  component: EGraphic,
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  },
  argTypes: {}
};

export const Default = (args: __esri.GraphicProperties) => ({
  setup() {
    return {
      geometry: args.geometry,
      symbol: args.symbol,
      attributes: args.attributes,
      popupTemplate: args.popupTemplate
    };
  },
  template: `<EMap basemap="topo-vector">
    <EMapView :center="[-98, 49.5]" :zoom="3"></EMapView>
    <EGraphic :geometry="geometry" :symbol="symbol" :attributes="attributes" :popupTemplate="popupTemplate"></EGraphic>
  </EMap>`
});
Default.args = {
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
  },
  attributes: {
    Name: "Keystone Pipeline",
    Owner: "TransCanada"
  },
  popupTemplate: {
    title: "{NAME}",
    content: [
      {
        // Pass in the fields to display
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Name",
            label: "Name"
          },
          {
            fieldName: "Owner",
            label: "Owner"
          }
        ]
      }
    ]
  }
};
