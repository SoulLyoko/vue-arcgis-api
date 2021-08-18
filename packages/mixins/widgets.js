import emitter from "../utils/emitter";

export default {
  render() {},
  props: {
    position: { type: String, default: "top-left" }
  },
  data() {
    return {
      module: null,
      instance: null
    };
  },
  mounted() {
    emitter.on("viewInit", view => {
      this.init(view);
    });
  },
  methods: {
    init(view) {
      this.instance = new this.module({ view, ...this.$attrs });
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
    }
  }
};
