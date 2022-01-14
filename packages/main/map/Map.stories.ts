import readme from "./Map.md";
import { readmeDocs } from "../common";
import { EMap } from ".";

export default {
  title: "Main/Map",
  component: EMap,
  parameters: {
    ...readmeDocs(readme)
  },
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

export const Default = (args: __esri.MapProperties) => ({
  setup() {
    return {
      basemap: args.basemap,
      ground: args.ground
    };
  },
  template: `<EMap :basemap="basemap" :ground="ground"><EMapView></EMapView></EMap>`
});
Default.args = {
  basemap: "streets-vector",
  ground: "world-elevation"
};
