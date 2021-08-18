<template>
  <div class="e-widget-custom" ref="customWidget" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import emitter from "../../utils/emitter";

export default {
  name: "e-widget-custom",
  props: {
    position: { type: String, default: "top-left" },
    boxShadow: { type: Boolean, default: true }
  },
  data() {
    return {};
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
      view.ui.add(this.$refs.customWidget, this.position);
    });
  }
};
</script>
