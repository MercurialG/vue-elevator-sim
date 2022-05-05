<template>
  <div class="controlPanel">
    <input class="floorCount" v-model="floorCount.length" />
    <br />
    <button class="cp_button" @click="floorStore.setFloorCount(floorCount.length)">
      set floors
    </button>
    <button class="cp_button" @click="increase">UP</button>
    <button class="cp_button" @click="decrease">DOWN</button>
    <div class="floorButtons">
      <button
        v-for="floor in floorCount.length"
        class="cp_button"
        @click="changeFloor(floor)"
      >
        {{ floor }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFloorStore } from "../store/floor.js";
import { reactive, ref } from "vue";
// import animation from "../animation.js";
name: "ControlPanel";
let floorStore = useFloorStore();
let floorCount = reactive([1, 2]);
let increase = floorStore.increaseFloor;
let decrease = floorStore.decreaseFloor;
let elevator = document.getElementById("elevator");
const changeFloor = (floor) => {
  floorStore.floorSequence(floor);
  window.requestAnimationFrame(step);
};
var start = null;
var element = document.getElementById("cabin");

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  elevator.style.transform = "translateY(" + Math.min(-progress / 18, 100) + "px)";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}
</script>

<style scoped>
.controlPanel {
  display: flex;
  gap: 20px;
}

.floorCount {
  width: 20px;
  height: 20px;
}
.floorButtons {
  display: flex;
  flex-wrap: wrap-reverse;
  width: 250px;
  gap: 20px;
}

.cp_button {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 2px solid lightgray;
  box-shadow: inset 0px 0px 2px 1px gray, inset 0px -3px 4px rgba(0, 0, 0, 0.3),
    inset 0px 3px 4px rgba(255, 255, 255, 0.6), 0px -2px 3px rgba(0, 0, 0, 0.6),
    0px 1px 2px rgba(255, 255, 255, 0.7), 0px 0px 1px 1px black, 0px 0px 0px 5px gray,
    0px 0px 1px 6px black;
  display: block;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #3c3c3c;
  outline: none;
}
.cp_button:hover {
  border-color: lime;
}
.cp_button:active,
.cp_button.active {
  background: lime;
  color: lighten(lime, 40%);
  border-color: green;
}
</style>
