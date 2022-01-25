import { EWidget } from ".";
import { ref } from "vue-demi";
import { argTypes } from "../common";

export default {
  title: "Widgets/Widget",
  component: EWidget,
  parameters: {},
  argTypes: {
    ...argTypes
  }
};

export const Default = (args: { position: __esri.UIAddPosition }) => ({
  setup() {
    const visible = ref(true);

    function btnClick() {
      visible.value = !visible.value;
    }

    return {
      position: args.position,
      visible,
      btnClick
    };
  },
  template: `<EMap basemap="topo-vector">
    <EMapView></EMapView>
    <EWidget :position="position">
      <button @click="btnClick">visible:{{visible}}</button>
    </EWidget>
    <EWidget :position="position" v-if="visible">
      <button>custom</button>
    </EWidget>
  </EMap>`
});
Default.args = {
  position: "top-right"
};
