module.exports = {
  base: "/vue-arcgis-api",
  lang: "zh-CN",
  title: "vue-arcgis-api",
  description: "vue-arcgis-api",
  themeConfig: {
    repo: "SoulLyoko/vue-arcgis-api",
    nav: [],
    sidebar: {
      "/": [
        { text: "更新日志", link: "/CHANGELOG" },
        { text: "开始", link: "/" },
        {
          text: "基础地图",
          children: [
            { text: "Map 地图", link: "/map/map" },
            { text: "WebMap 网络地图", link: "/map/web-map" }
          ]
        },
        {
          text: "Views 视图",
          children: [
            { text: "MapView 地图视图", link: "/views/map-view" },
            { text: "SceneView 场景视图", link: "/views/scene-view" },
            { text: "Draw 画", link: "/views/draw" }
          ]
        },
        {
          text: "Layers 图层",
          children: [
            { text: "TileLayer 瓦片图层", link: "/layers/tile-layer" },
            { text: "FeatureLayer 要素图层", link: "/layers/feature-layer" },
            { text: "MapImageLayer 地图图像图层", link: "/layers/map-image-layer" }
          ]
        },
        {
          text: "Widgets 控件",
          link: "/widgets/widget"
        }
      ]
    }
  }
};
