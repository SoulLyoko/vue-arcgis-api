<template>
  <div class="mapDiv">
    <button @click="openDraw">openDraw</button>
    <EMap basemap="topo">
      <EMapView :center="[0, 0]" :zoom="0"></EMapView>
      <EDraw ref="EDrawRef"></EDraw>
    </EMap>
    <EWebMap :portalItem="{ id: 'e691172598f04ea8881cd2a4adaa45ba' }">
      <ESceneView :center="[0, 0]" :zoom="0"></ESceneView>
    </EWebMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import { EMap, EWebMap, EMapView, ESceneView, EDraw } from "~/index";
import "@arcgis/core/assets/esri/themes/light/main.css";

const EDrawRef = ref();
function openDraw() {
  console.log(EDrawRef.value);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mapDiv {
  width: 800px;
  height: 600px;
}
</style>
