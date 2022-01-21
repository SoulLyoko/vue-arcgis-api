const fs = require("fs");

const layers = [
  { name: "BaseDynamicLayer", events: ["refresh"] },
  { name: "BaseElevationLayer" },
  { name: "BaseTileLayer", events: ["refresh"] },
  { name: "BingMapsLayer", events: ["refresh"] },
  { name: "BuildingSceneLayer" },
  { name: "CSVLayer", events: ["refresh"] },
  { name: "ElevationLayer" },
  // { name: "FeatureLayer", events: ["refresh", "edits"] },
  { name: "GeoJSONLayer", events: ["refresh", "edits"] },
  { name: "GeoRSSLayer", events: ["refresh"] },
  // { name: "GraphicsLayer" },
  { name: "GroupLayer" },
  { name: "ImageryLayer", events: ["refresh"] },
  { name: "ImageryTileLayer" },
  { name: "IntegratedMeshLayer" },
  { name: "KMLLayer" },
  // { name: "MapImageLayer", events: ["refresh"] },
  { name: "MapNotesLayer" },
  { name: "OGCFeatureLayer", events: ["refresh"] },
  { name: "OpenStreetMapLayer" },
  { name: "PointCloudLayer" },
  { name: "SceneLayer" },
  { name: "StreamLayer" },
  { name: "SubtypeGroupLayer", events: ["refresh", "edits"] },
  // { name: "TileLayer", events: ["refresh"] },
  { name: "UnknownLayer" },
  { name: "UnsupportedLayer" },
  { name: "VectorTileLayer" },
  { name: "VoxelLayer" },
  { name: "WCSLayer" },
  { name: "WebTileLayer" },
  { name: "WFSLayer", events: ["refresh"] },
  { name: "WMSLayer", events: ["refresh"] },
  { name: "WMTSLayer", events: ["refresh"] }
];

const genIndex = ({ name, events }) => {
  let eventsStr = "[] as never[]";
  if (events?.length > 5) {
    eventsStr = JSON.stringify(events, undefined, 2);
  } else if (events?.length) {
    eventsStr = JSON.stringify(events).replace(/,/g, ", ");
  }
  return `import { defineComponent } from "vue-demi";
import ${name} from "@arcgis/core/layers/${name}";
import { useInitLayer } from "../../use";

const ownEvents = ${eventsStr};

export const E${name} = defineComponent((props, context) => {
  return useInitLayer({ ...context, Module: ${name}, ownEvents });
});

export type E${name} = InstanceType<typeof E${name}>;
`;
};

const genMd = ({ name }) =>
  `- [${name}Properties](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-${name}.html#properties-summary)
- [${name}Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-${name}.html#events-summary)
`;

const genStories = ({ name }) => `import readme from "./${name}.md";
import { argTypes, readmeDocs } from "../common";
import { E${name} } from ".";

export default {
  title: "Layers/${name}",
  component: E${name},
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {
    ...argTypes
  }
};

export const Default = (args: __esri.${name}Properties) => ({
  setup() {
    return { args };
  },
  template: \`<EMap basemap="topo-vector">
    <EMapView></EMapView>
    <E${name} v-bind="args"></E${name}>
  </EMap>\`
});
Default.args = {};
`;

layers.forEach(layer => {
  const basePath = `packages/layers/${layer.name}`;
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  }
  fs.writeFileSync(`${basePath}/index.ts`, genIndex(layer));
  fs.writeFileSync(`${basePath}/${layer.name}.md`, genMd(layer));
  fs.writeFileSync(`${basePath}/${layer.name}.stories.ts`, genStories(layer));
});
