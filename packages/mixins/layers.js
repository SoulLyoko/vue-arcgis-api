export default {
  inject: ["mapRoot"],
  render() {},
  data() {
    return {
      module: null,
      instance: null,
      events: ["layerview-create", "layerview-create-error", "layerview-destroy"],
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
    this.mapRoot.map.remove(this.instance);
  },
  methods: {
    init() {
      this.instance = new this.module(this.$attrs);
      this.mapRoot.map.add(this.instance);
      [...this.events, ...this.otherEvents].forEach(event => {
        this.instance.on(event, e => {
          this.$emit(event, e);
        });
      });
      this.$emit("init", this.instance);
    }
  }
};
