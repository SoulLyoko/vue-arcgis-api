import { ExtractPropTypes } from "vue-demi";
import Draw from "@arcgis/core/views/draw/Draw";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import { PROPS } from "./use/const";

export interface DrawState {
  drawer: Draw | null;
  graphicsLayer: GraphicsLayer | null;
  graphicsLayers: GraphicsLayer[];
  graphics: Graphic[];
}

export type Props = ExtractPropTypes<typeof PROPS>;
