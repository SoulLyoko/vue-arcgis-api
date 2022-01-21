const fs = require("fs");

const widgets = [
  { name: "AreaMeasurement2D" },
  { name: "AreaMeasurement3D" },
  { name: "Attachments" },
  { name: "Attribution" },
  { name: "BasemapGallery" },
  { name: "BasemapLayerList", events: ["trigger-action"] },
  { name: "BasemapToggle", events: ["toggle"] },
  { name: "Bookmarks", events: ["bookmark-edit", "bookmark-select"] },
  { name: "BuildingExplorer" },
  { name: "Compass" },
  { name: "CoordinateConversion" },
  { name: "Daylight" },
  { name: "Directions" },
  { name: "DirectLineMeasurement3D" },
  { name: "DistanceMeasurement2D" },
  { name: "Editor" },
  { name: "ElevationProfile" },
  { name: "Expand" },
  { name: "Feature" },
  { name: "FeatureForm", events: ["submit", "value-change"] },
  { name: "FeatureTable", events: ["selection-change"] },
  { name: "FeatureTemplates", events: ["select"] },
  { name: "FloorFilter" },
  { name: "Fullscreen" },
  { name: "Histogram" },
  { name: "HistogramRangeSlider", events: ["max-change", "min-change", "segment-drag", "thumb-change", "thumb-drag"] },
  { name: "Home", events: ["go"] },
  { name: "LayerList", events: ["trigger-action"] },
  { name: "Legend" },
  { name: "LineOfSight" },
  { name: "Locate", events: ["locate", "locate-error"] },
  { name: "Measurement" },
  { name: "NavigationToggle" },
  { name: "Popup", envets: ["trigger-action"] },
  { name: "Print", events: ["complete", "submit"] },
  { name: "ScaleBar" },
  { name: "ScaleRangeSlider" },
  {
    name: "Search",
    evnets: [
      "search-blur",
      "search-clear",
      "search-complete",
      "search-focus",
      "search-start",
      "select-result",
      "suggest-complete",
      "suggest-start"
    ]
  },
  { name: "ShadowCast" },
  // { name: "Sketch", events: ["create", "delete", "redo", "undo", "update"] },
  { name: "Slice" },
  {
    name: "Slider",
    events: [
      "max-change",
      "max-click",
      "min-change",
      "min-click",
      "segment-click",
      "segment-drag",
      "thumb-change",
      "thumb-click",
      "thumb-drag",
      "tick-click",
      "track-click"
    ]
  },
  { name: "Swipe" },
  { name: "TableList", events: ["trigger-action"] },
  { name: "TimeSlider", events: ["trigger-action"] },
  { name: "Track", events: ["track", "track-error"] },
  { name: "UtilityNetworkTrace" },
  { name: "Zoom" }
];

const genIndex = ({ name, events }) => {
  let eventsStr = "[] as never[]";
  if (events?.length > 5) {
    eventsStr = JSON.stringify(events, undefined, 2);
  } else if (events?.length) {
    eventsStr = JSON.stringify(events).replace(/,/g, ", ");
  }
  return `import { defineComponent } from "vue-demi";
import ${name} from "@arcgis/core/widgets/${name}";
import { useInitWidget } from "../../use";

const events = ${eventsStr};

export const E${name} = defineComponent((props, context) => {
  return useInitWidget({ ...context, Module: ${name}, events });
});

export type E${name} = InstanceType<typeof E${name}>;
`;
};

const genMd = ({ name, events }) => {
  const propertiesStr = `- [${name}Properties](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-${name}.html#properties-summary)`;
  const eventsStr = `- [${name}Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-${name}.html#events-summary)`;
  return `${propertiesStr}${events ? "\n" + eventsStr : ""}
`;
};

const genStories = ({ name }) => `import readme from "./${name}.md";
import { argTypes, readmeDocs } from "../common";
import { E${name} } from ".";

export default {
  title: "Widgets/${name}",
  component: E${name},
  parameters: {
    ...readmeDocs(readme)
  },
  argTypes: {
    ...argTypes
  }
};

export const Default = (args: __esri.${name}Properties & { position: string }) => ({
  setup() {
    return {
      position: args.position
    };
  },
  template: \`<EMap basemap="topo-vector">
    <EMapView></EMapView>
    <E${name} :position="position"></E${name}>
  </EMap>\`
});
Default.args = {
  position: "top-right"
};
`;

widgets.forEach(widget => {
  const basePath = `packages/widgets/${widget.name}`;
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  }
  fs.writeFileSync(`${basePath}/index.ts`, genIndex(widget));
  fs.writeFileSync(`${basePath}/${widget.name}.md`, genMd(widget));
  fs.writeFileSync(`${basePath}/${widget.name}.stories.ts`, genStories(widget));
});
