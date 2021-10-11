# vue-arcgis-api

- ArcgisApi 的 Vue 组件库
- 依赖于 [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) 库
- [docs 文档](https://soullyoko.github.io/vue-arcgis-api/)

## 安装

```sh
yarn add @arcgis/core ncp --dev
yarn add vue-arcgis-api
```

- 在 package.json 中为你的 script 添加: `"arcgis:cp": "ncp ./node_modules/@arcgis/core/assets ./public/assets"`
- 运行一次 `yarn arcgis:cp` 将 acrgisapi 拷贝到项目目录下就可以开始啦

## 快速上手

### 全局引入

`main.js`

```js
import Vue from "vue";
import App from "./App.vue";
import VueArcgis from "../packages";
import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "/assets";

Vue.use(VueArcgis);

new Vue({
  render: h => h(App)
}).$mount("#app");
```

`App.vue`

```html
<template>
  <div class="mapDiv">
    <e-map :basemap="basemap">
      <e-map-view :center="center" :zoom="zoom"></e-map-view>
    </e-map>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        basemap: "topo",
        center: [0, 0],
        zoom: 0
      };
    }
  };
</script>

<style scoped>
  .mapDiv {
    width: 100%;
    height: 300px;
  }
</style>
```

### 按需引入

`App.vue`

```html
<template>
  <div class="mapDiv">
    <e-map :basemap="basemap">
      <e-map-view :center="center" :zoom="zoom"></e-map-view>
    </e-map>
  </div>
</template>

<script>
  import { EMap, EMapView } from "vue-arcgis-api";
  import "@arcgis/core/assets/esri/themes/light/main.css";
  import esriConfig from "@arcgis/core/config.js";
  esriConfig.assetsPath = "/assets";

  export default {
    name: "App",
    data() {
      return {
        basemap: "topo",
        center: [0, 0],
        zoom: 0
      };
    }
  };
</script>

<style scoped>
  .mapDiv {
    width: 100%;
    height: 300px;
  }
</style>
```
