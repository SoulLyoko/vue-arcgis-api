import readme from "./sceneView.md";
import { ESceneView } from ".";

export default {
  title: "Views/SceneView",
  component: ESceneView,
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  },
  argTypes: {}
};

export const Default = (args: __esri.SceneViewProperties) => ({
  setup() {
    return { args };
  },
  template: `<EWebMap basemap="hybrid">
    <ESceneView v-bind="args"></ESceneView>
  </EWebMap>`
});
Default.args = {
  center: [-112, 38],
  zoom: 0
};
