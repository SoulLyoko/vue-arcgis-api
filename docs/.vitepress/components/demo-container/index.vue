<template>
  <div class="demo-container" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  height: { type: String, default: "300px" }
});
</script>

<script lang="ts">
export default { name: "container" };
</script>

<style scoped>
.demo-container {
  width: 100%;
}
</style>
