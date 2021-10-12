<template>
  <div id="app">
    <e-map :basemap="basemap">
      <e-map-view :center="center" :zoom="zoom" @click="mapClick"></e-map-view>
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
  },
  methods: {
    mapClick(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
