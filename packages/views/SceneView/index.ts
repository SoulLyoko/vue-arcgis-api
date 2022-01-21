import { defineComponent } from "vue-demi";
import SceneView from "@arcgis/core/views/SceneView";
import { useInitView } from "../../use";

export const ESceneView = defineComponent((props, context) => {
  return useInitView({ ...context, Module: SceneView });
});

export type ESceneView = InstanceType<typeof ESceneView>;
