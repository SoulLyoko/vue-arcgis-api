import { EWebMap } from "./";

export default {
  title: "Main/WebMap",
  component: EWebMap,
  argTypes: {}
};

const Template = (args: __esri.WebMapProperties) => ({
  setup() {
    return { args };
  },
  template: '<EWebMap v-bind="args"><EMapView></EMapView></EWebMap>'
});

export const Default = Template.bind({});
(Default as any).args = {
  portalItem: {
    // autocasts as new PortalItem()
    id: "e691172598f04ea8881cd2a4adaa45ba"
  }
};
