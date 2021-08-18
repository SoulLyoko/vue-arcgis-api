import emitter from "../utils/emitter";

export default {
  inject: ["mapRoot"],
  render() {},
  data() {
    return {
      module: null,
      map: null,
      instance: null,
      events: ["layerview-create", "layerview-create-error", "layerview-destroy"],
      otherEvents: []
    };
  },
  mounted() {
    this.map = this.map || this.mapRoot.map;
    if (this.map) {
      this.init();
    } else {
      emitter.on("mapInit", map => {
        this.map = map;
        this.init();
      });
    }
  },
  watch: {
    $attrs: {
      handler(val) {
        Object.keys(val).forEach(key => {
          this.instance[key] = val[key];
        });
        this.instance.refresh();
      },
      deep: true
    }
  },
  beforeDestroy() {
    this.map.remove(this.instance);
  },
  methods: {
    init() {
      this.instance = new this.module(this.$attrs);
      this.map.add(this.instance);
      [...this.events, ...this.otherEvents].forEach(event => {
        this.instance.on(event, e => {
          this.$emit(event, e);
        });
      });
      this.$emit("init", this.instance);
    }
  }
};
