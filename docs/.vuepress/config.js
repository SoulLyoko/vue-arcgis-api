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
        title: "地图",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/base/map"]
      }
    ]
  }
};
