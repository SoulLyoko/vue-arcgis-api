import { EWebScene } from ".";

export default {
  title: "Main/WebScene",
  component: EWebScene,
  argTypes: {}
};

const Template = (args: __esri.WebSceneProperties) => ({
  setup() {
    return { args };
  },
  template: '<EWebScene v-bind="args"><EMapView></EMapView></EWebScene>'
});

export const Default = Template.bind({});
(Default as any).args = {
  portalItem: {
    // autocasts as new PortalItem()
    id: "affa021c51944b5694132b2d61fe1057"
  }
};
