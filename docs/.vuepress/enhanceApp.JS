/**
 * 扩展 VuePress 应用
 */
// import VueArcgis from "../../packages";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "/vue-arcgis-api/assets";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  // Vue.use(VueArcgis);
  Vue.mixin({
    mounted() {
      import("../../packages").then(function (m) {
        Vue.use(m.default);
      });
    }
  });
};
