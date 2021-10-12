<template>
  <div class="e-widget-custom" ref="customWidget" :style="style" v-if="$slots.default">
    <slot></slot>
  </div>
</template>

<script>
import modules from "./modules";

export default {
  name: "e-widget",
  inject: ["mapRoot"],
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
    this.mapRoot.$on("viewInit", () => {
      if (this.$slots.default) {
        this.initCustom();
      } else if (this.module) {
        this.module && this.initModule();
      }
    });
  },
  methods: {
    async initModule() {
      const view = this.mapRoot.view;
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
    initCustom() {
      const view = this.mapRoot.view;
      view.ui.add(this.$refs.customWidget, this.position);
      this.$on("hook:beforeDestroy", () => view.ui.remove(this.$refs.customWidget));
    }
  }
};
</script>
