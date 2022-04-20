<template>
  <div class="floor">
    <!-- <cabin v-if="floorStore.floorCount.length == 5" /> -->
    <!-- <slot name="`floor${floors[i]}`"></slot> -->
  </div>
</template>

<script>
import Cabin from "./Cabin.vue";
import { useFloorStore } from "../store/floor.js";
export default {
  name: "Floor",
  setup() {
    const floorStore = useFloorStore();
    let floors = floorStore.floorCount
    let chosenFloor = floorStore.chosenFloor
    return { floorStore, floors, chosenFloor };
  },
  components: {
    Cabin,
  },
};
</script>

<style scoped>
.floor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 105px;
  width: 80px;
  background-color: silver;
  border-style: solid;
  border-width: 2px;
  border-color: black;
}
.cabin {

}
</style>
