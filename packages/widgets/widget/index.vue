<template>
  <div class="e-widget-custom" ref="customWidget" :style="style" v-if="$slots.default">
    <slot></slot>
  </div>
</template>

<script>
import AreaMeasurement2D from "@arcgis/core/widgets/AreaMeasurement2D";
import AreaMeasurement3D from "@arcgis/core/widgets/AreaMeasurement3D";
import Attribution from "@arcgis/core/widgets/Attribution";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import BasemapLayerList from "@arcgis/core/widgets/BasemapLayerList";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import BuildingExplorer from "@arcgis/core/widgets/BuildingExplorer";
import Compass from "@arcgis/core/widgets/Compass";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import Daylight from "@arcgis/core/widgets/Daylight";
import Directions from "@arcgis/core/widgets/Directions";
import DirectLineMeasurement3D from "@arcgis/core/widgets/DirectLineMeasurement3D";
import DistanceMeasurement2D from "@arcgis/core/widgets/DistanceMeasurement2D";
import Editor from "@arcgis/core/widgets/Editor";
import ElevationProfile from "@arcgis/core/widgets/ElevationProfile";
import FeatureForm from "@arcgis/core/widgets/FeatureForm";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import FeatureTemplates from "@arcgis/core/widgets/FeatureTemplates";
import FloorFilter from "@arcgis/core/widgets/FloorFilter";
import Home from "@arcgis/core/widgets/Home";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
import LineOfSight from "@arcgis/core/widgets/LineOfSight";
import Locate from "@arcgis/core/widgets/Locate";
import Measurement from "@arcgis/core/widgets/Measurement";
import NavigationToggle from "@arcgis/core/widgets/NavigationToggle";
import Popup from "@arcgis/core/widgets/Popup";
import Print from "@arcgis/core/widgets/Print";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import ScaleRangeSlider from "@arcgis/core/widgets/ScaleRangeSlider";
import Search from "@arcgis/core/widgets/Search";
import ShadowAccumulation from "@arcgis/core/widgets/ShadowAccumulation";
import Sketch from "@arcgis/core/widgets/Sketch";
import Slice from "@arcgis/core/widgets/Slice";
import Swipe from "@arcgis/core/widgets/Swipe";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Track from "@arcgis/core/widgets/Track";
import Zoom from "@arcgis/core/widgets/Zoom";
import emitter from "../../utils/emitter";

const modules = {
  AreaMeasurement2D,
  AreaMeasurement3D,
  Attribution,
  BasemapGallery,
  BasemapLayerList,
  BasemapToggle,
  Bookmarks,
  BuildingExplorer,
  Compass,
  CoordinateConversion,
  Daylight,
  Directions,
  DirectLineMeasurement3D,
  DistanceMeasurement2D,
  Editor,
  ElevationProfile,
  FeatureForm,
  FeatureTable,
  FeatureTemplates,
  FloorFilter,
  Home,
  LayerList,
  Legend,
  LineOfSight,
  Locate,
  Measurement,
  NavigationToggle,
  Popup,
  Print,
  ScaleBar,
  ScaleRangeSlider,
  Search,
  ShadowAccumulation,
  Sketch,
  Slice,
  Swipe,
  TimeSlider,
  Track,
  Zoom
};

export default {
  name: "e-widget",
  props: {
    position: { type: String, default: "top-left" },
    module: { type: String },
    boxShadow: { type: Boolean, default: true }
  },
  data() {
    return {
      instance: null
    };
  },
  computed: {
    style() {
      return {
        boxShadow: this.boxShadow ? "0 1px 2px rgb(0 0 0 / 30%)" : "none"
      };
    }
  },
  mounted() {
    emitter.on("viewInit", view => {
      if (this.$slots.default) {
        this.initCustom(view);
      } else if (this.module) {
        this.module && this.initModule(view);
      }
    });
  },
  methods: {
    async initModule(view) {
      const module = modules[this.module];
      this.instance = new module({ view, ...this.$attrs });
      view.ui.add(this.instance, this.position);
      this.$watch(
        "$attrs",
        val => {
          Object.keys(val).forEach(key => {
            this.instance[key] = val[key];
          });
        },
        { deep: true }
      );
      this.$on("hook:beforeDestroy", () => view.ui.remove(this.instance));
    },
    initCustom(view) {
      view.ui.add(this.$refs.customWidget, this.position);
      this.$on("hook:beforeDestroy", () => view.ui.remove(this.$refs.customWidget));
    }
  }
};
</script>
