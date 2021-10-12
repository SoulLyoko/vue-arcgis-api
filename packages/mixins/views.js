import { uuid } from "../utils/uuid";

export default {
  inject: ["mapRoot"],
  data() {
    return {
      module: null,
      containerId: uuid(),
      events: [
        "blur",
        "click",
        "double-click",
        "drag",
        "focus",
        "hold",
        "immediate-click",
        "immediate-double-click",
        "key-down",
        "key-up",
        "mouse-wheel",
        "pointer-down",
        "pointer-enter",
        "pointer-leave",
        "pointer-move",
        "pointer-up",
        "layerview-create",
        "layerview-create-error",
        "layerview-destroy",
        "resize"
      ],
      otherEvents: []
    };
  },
  mounted() {
    if (this.mapRoot.map) {
      this.init();
    } else {
      this.mapRoot.$on("mapInit", () => {
        this.init();
      });
    }
  },
  methods: {
    async init() {
      const view = new this.module({
        container: this.containerId, // References the ID of a DOM element
        map: this.mapRoot.map, // References a Map instance
        ...this.$attrs
      });
      [...this.events, ...this.otherEvents].forEach(event => {
        view.on(event, e => {
          this.$emit(event, e);
        });
      });
      this.$watch(
        "$attrs",
        val => {
          Object.keys(val).forEach(key => {
            view[key] = val[key];
          });
        },
        { deep: true }
      );
      this.mapRoot.$emit("rootViewInit", view);
      this.$emit("init", view);
    }
  }
};
