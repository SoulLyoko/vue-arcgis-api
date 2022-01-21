import readme from "./WebScene.md";
import { readmeDocs } from "../common";
import { EWebScene } from ".";

export default {
  title: "Main/WebScene",
  component: EWebScene,
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {}
};

export const Default = (args: __esri.WebSceneProperties) => ({
  setup() {
    return {
      portalItem: args.portalItem
    };
  },
  template: `<EWebScene :portalItem="portalItem"><EMapView></EMapView></EWebScene>`
});
Default.args = {
  portalItem: {
    // autocasts as new PortalItem()
    id: "affa021c51944b5694132b2d61fe1057"
  }
};
