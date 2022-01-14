import readme from "./MapView.md";
import { readmeDocs } from "../common";
import { EMapView } from ".";

export default {
  title: "Views/MapView",
  component: EMapView,
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {}
};

export const Default = (args: __esri.MapViewProperties) => ({
  setup() {
    return {
      center: args.center,
      zoom: args.zoom,
      onClick(e: __esri.ViewClickEvent) {
        console.log(e);
      },
      onDrag(e: __esri.ViewDragEvent) {
        console.log(e);
      }
    };
  },
  template: `<EWebMap basemap="topo-vector">
    <EMapView :center="center" :zoom="zoom" @click="onClick" @drag="onDrag"></EMapView>
  </EWebMap>`
});
Default.args = {
  center: [-112, 38],
  zoom: 13
};
