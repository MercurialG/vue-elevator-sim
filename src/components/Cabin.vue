<template>
  <div class="cabin">
    <div class="cabin_top"></div>
    <div class="doors">
      <div class="door_left"></div>
      <div class="door_right"></div>
    </div>
  </div>
</template>

<script setup>
name: "Cabin";
</script>

<style scoped>
.cabin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 70px;
  background-color: black;
}
.cabin_top {
  height: 16px;
  width: 66px;
  background-color: gray;
  border-bottom: 2px solid black;
  justify-self: flex-start;
}
.doors {
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 78px;
  gap: 2px;
}
.door_left {
  order: 0;
  background-color: silver;
  width: 32px;
}
.door_right {
  order: 1;
  background-color: silver;
  width: 32px;
}
</style>
