import readme from "./Sketch.md";
import { argTypes, readmeDocs } from "../common";
import { ESketch } from ".";

export default {
  title: "Widgets/Sketch",
  component: ESketch,
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {
    ...argTypes
  }
};

export const Default = (args: __esri.SketchProperties & { position: string }) => ({
  setup() {
    return {
      position: args.position
    };
  },
  template: `<EMap basemap="topo-vector">
    <EMapView></EMapView>
    <ESketch :position="position"></ESketch>
  </EMap>`
});
Default.args = {
  position: "top-right"
};
