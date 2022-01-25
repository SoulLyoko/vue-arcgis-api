import readme from "./Editor.md";
import { argTypes, readmeDocs } from "../common";
import { EEditor } from ".";

export default {
  title: "Widgets/Editor",
  component: EEditor,
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {
    ...argTypes
  }
};

export const Default = (args: __esri.EditorProperties & { position: string }) => ({
  setup() {
    return {
      position: args.position
    };
  },
  template: `<EWebMap :portalItem="{id: '459a495fc16d4d4caa35e92e895694c8'}">
    <EMapView></EMapView>
    <EEditor :position="position"></EEditor>
  </EWebMap>`
});
Default.args = {
  position: "top-right"
};
