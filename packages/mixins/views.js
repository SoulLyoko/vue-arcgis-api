import { uuid } from "../utils/uuid";
// import { loadModules } from "esri-loader";

export default {
  inject: ["mapRoot"],
  render() {
    return (
      <div id={this.containerId} style="width:100%;height:100%">
        <slot></slot>
      </div>
    );
  },
  data() {
    return {
      module: null,
      map: null,
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
    this.map = this.map || this.mapRoot.map;
    if (this.map) {
      this.init();
    } else {
      this.$on("mapInit", map => {
        this.map = map;
        this.init();
      });
    }
  },
  methods: {
    async init() {
      // const [Module] = await loadModules([this.module]);
      const view = new this.module({
        container: this.containerId, // References the ID of a DOM element
        map: this.map, // References a Map instance
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
    }
  }
};
