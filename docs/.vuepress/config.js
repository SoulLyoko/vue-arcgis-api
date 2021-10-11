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
        children: ["/map/map", "/views/map-view", "/views/scene-view"]
      },
      {
        title: "图层",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/layers/tile-layer", "/layers/feature-layer", "/layers/map-image-layer"]
      }
    ]
  }
};
