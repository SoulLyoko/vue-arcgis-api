import readme from "./webMap.md";
import { EWebMap } from ".";

export default {
  title: "Main/WebMap",
  component: EWebMap,
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
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
