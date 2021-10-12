const path = require("path");

module.exports = {
  base: "/vue-arcgis-api/",
  title: "vue-arcgis-api文档",
  description: "vue-arcgis-api文档",
  themeConfig: {
    sidebar: [
      {
        title: "开始",
        path: "/"
      },
      {
        title: "基础地图",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/map/map", "/map/web-map"]
      },
      {
        title: "Views 视图",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/views/map-view", "/views/scene-view"]
      },
      {
        title: "Layers 图层",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/layers/tile-layer", "/layers/feature-layer", "/layers/map-image-layer"]
      },
      {
        title: "Widgets 控件",
        path: "/widgets/widget"
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        "vue-arcgis-api": path.resolve(__dirname, "../../packages")
      }
    }
  }
};
