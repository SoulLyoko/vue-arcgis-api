export default {
  render(createElement) {
    return createElement(
      "div",
      {
        style: { width: "100%", height: "100%" }
      },
      [this.$slots.default]
    );
  },
  provide() {
    return {
      mapRoot: this
    };
  },
  data() {
    return {
      module: null
    };
  },
  watch: {
    $attrs: {
      handler(val) {
        Object.keys(val).forEach(key => {
          this.map[key] = val[key];
        });
      },
      deep: true
    }
  },
  mounted() {
    this.$on("rootViewInit", view => {
      this.view = view;
      this.$emit("viewInit", this.view, this.map);
    });
    this.initMap();
  },
  methods: {
    async initMap() {
      this.map = new this.module(this.$attrs);
      this.$emit("mapInit", this.map);
      this.$emit("init", this.map);
    }
  }
};
