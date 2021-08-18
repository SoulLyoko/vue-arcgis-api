<script>
import widgetsMixin from "../../mixins/widgets";
import Legend from "@arcgis/core/widgets/Legend";

export default {
  name: "e-widget-legend",
  mixins: [widgetsMixin],
  data() {
    return {
      module: Legend
    };
  }
};
</script>
