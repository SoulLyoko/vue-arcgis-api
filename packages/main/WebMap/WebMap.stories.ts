import readme from "./WebMap.md";
import { readmeDocs } from "../common";
import { EWebMap } from ".";

export default {
  title: "Main/WebMap",
  component: EWebMap,
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {}
};

export const Default = (args: __esri.WebMapProperties) => ({
  setup() {
    return {
      portalItem: args.portalItem
    };
  },
  template: `<EWebMap :portalItem="portalItem"><EMapView></EMapView></EWebMap>`
});
Default.args = {
  portalItem: {
    // autocasts as new PortalItem()
    id: "e691172598f04ea8881cd2a4adaa45ba"
  }
};
