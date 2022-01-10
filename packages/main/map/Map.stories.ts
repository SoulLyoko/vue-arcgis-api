import { EMap } from "./";
import { EMapView } from "../../views/mapView";

export default {
  title: "Main/Map",
  component: EMap,
  argTypes: {
    basemap: {
      control: { type: "select" },
      options: [
        "satellite",
        "hybrid",
        "oeans",
        "osm",
        "terrain",
        "dark-gray-vector",
        "gray-vector",
        "streets-vector",
        "streets-night-vector",
        "streets-navigation-vector",
        "topo-vector",
        "streets-relief-vector"
      ]
    },
    ground: {
      control: { type: "select" },
      options: ["world-elevation", "world-topobathymetry"]
    }
  }
};

const Template = (args: __esri.MapProperties) => ({
  components: { EMap, EMapView },
  setup() {
    return { args };
  },
  template: '<EMap v-bind="args"><EMapView></EMapView></EMap>'
});

export const Default = Template.bind({});
(Default as any).args = {
  basemap: "streets-vector",
  ground: "world-elevation"
};
