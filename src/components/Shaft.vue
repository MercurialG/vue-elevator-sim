<template>
  <div class="shaft">
    <div v-for="item in floorStore.floors.slice().reverse()" class="floor_container">
      <floor>
        <cabin id="cabin" v-if="floorStore.currentFloor == item.floorNumber" />
      </floor>
      <div class="floor_buttons">
        <div class="button"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Floor from "./Floor.vue";
import Cabin from "./Cabin.vue";
import { useFloorStore } from "../store/floor.js";
import { reactive, ref, computed } from "vue";
name: "Shaft";
const floorStore = useFloorStore();

// function makeEaseInOut(timing) {
//   return function (timeFraction) {
//     if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
//     else return (2 - timing(2 * (1 - timeFraction))) / 2;
//   };
// }
</script>

<style>
@keyframes cabin-movement-up {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-109px);
  }
}
@keyframes cabin-movement-down {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(109px);
  }
}

.elevator-up {
  animation-name: cabin-movement-up;
  animation-duration: 1s;
  animation-direction: ease-in-out;
  animation-fill-mode: forwards;
}
.elevator-down {
  animation-name: cabin-movement-down;
  animation-duration: 1s;
  animation-direction: ease-in-out;
  animation-fill-mode: forwards;
}

.shaft {
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: center;
  background-color: black;
}
.floor_container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.floor_buttons {
  height: 20px;
  width: 10px;
  background-color: silver;
  order: 1;
}
.button {
  height: 4px;
  width: 4px;
  margin-top: 8px;
  margin-left: 3px;
  border-radius: 5px;
  background-color: green;
}
.floor {
  /* z-index: 999; */
}
.elevator-enter-active {
  transition: all 0.3s ease-in-out;
}
</style>
