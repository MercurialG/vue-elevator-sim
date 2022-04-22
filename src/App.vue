<script setup>
import Cabin from "./components/Cabin.vue";
import Shaft from "./components/Shaft.vue";
import ControlPanel from "./components/ControlPanel.vue";
</script>

<template>
  <shaft />
  <controlPanel />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.shaft {
  margin-left: 49.6vw;
}
.controlPanel {
  margin-left: 5vw;
}
</style>
