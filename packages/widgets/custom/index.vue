<template>
  <div class="e-widget-custom" ref="customWidget" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import widgetsMixin from "../../mixins/widgets";

export default {
  name: "e-widget-custom",
  mixins: [widgetsMixin],
  props: {
    boxShadow: { type: Boolean, default: true }
  },
  computed: {
    style() {
      return {
        boxShadow: this.boxShadow ? "0 1px 2px rgb(0 0 0 / 30%)" : "none"
      };
    }
  },
  methods: {
    init(view) {
      view.ui.add(this.$refs.customWidget, this.position);
      this.$on("hook:beforeDestroy", () => view.ui.remove(this.instance));
    }
  }
};
</script>
