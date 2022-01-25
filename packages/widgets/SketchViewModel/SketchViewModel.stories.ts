import readme from "./SketchViewModel.md";
import { readmeDocs } from "../common";
import { ESketchViewModel } from ".";

export default {
  title: "Widgets/SketchViewModel",
  component: ESketchViewModel,
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {}
};

export const Default = (args: __esri.SketchViewModelProperties) => ({
  setup() {
    return {
      geometry: {
        type: "polyline", // autocasts as new Polyline()
        paths: [
          [1580058.7554887987, 2589600.731919481],
          [1780882.622058364, 2687068.822569854],
          [2671667.769085113, 2214606.6241339264],
          [2671667.769085113, 2214606.6241339264],
          [2671847.0489998497, 1770863.8475833694]
        ],
        spatialReference: { wkid: 3857 }
      },
      symbol: {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        color: [226, 119, 40],
        width: 4
      },
      updateOnGraphicClick: args.updateOnGraphicClick,
      defaultUpdateOptions: args.defaultUpdateOptions
    };
  },
  template: `<EMap basemap="topo-vector">
    <EMapView></EMapView>
    <ESketchViewModel :updateOnGraphicClick="updateOnGraphicClick" :defaultUpdateOptions="defaultUpdateOptions">
      <EGraphic :geometry="geometry" :symbol="symbol"></EGraphic>
    </ESketchViewModel>
  </EMap>`
});
Default.args = {
  updateOnGraphicClick: true,
  defaultUpdateOptions: {
    toggleToolOnClick: true
  }
};
