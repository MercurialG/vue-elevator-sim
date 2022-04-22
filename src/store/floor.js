import { defineStore } from "pinia";

export const useFloorStore = defineStore("floorStore", {
  state: () => ({
    floorCount: [],
    chosenFloor: 1,
    currentFloor: 1,
    floorQueue: [],
    secondFloorQueue: [],
  }),
  getters: {},
  actions: {
    setFloorCount(num) {
      this.floorCount = [];
      if (num <= 20) {
        for (let i = 1; i <= num; i++) {
          this.floorCount.push({ floorNumber: i, chosen: false });
        }
      } else console.log(num, "number is too big");
    },
    increaseFloor() {
      this.chosenFloor++;
    },
    decreaseFloor() {
      this.chosenFloor--;
    },
    floorSequence(nextFloor) {
      if (
        this.floorQueue.includes(nextFloor) == false &&
        this.secondFloorQueue.includes(nextFloor) == false
      ) {
        if (nextFloor > this.currentFloor) {
          this.floorQueue.push(nextFloor);
          this.queueSort(this.floorQueue);
        } else {
          this.secondFloorQueue.push(nextFloor);
          this.queueSort(this.secondFloorQueue);
        }
      }
    },
    queueSort(queue) {
      console.log(queue);
      if (this.currentFloor < queue[0]) {
        queue.sort((a, b) => a - b);
      } else queue.sort((a, b) => b - a);
    },
    ride(){
      this.floorQueue.forEach(element => { this.chosenFloor = element
      });
    }
  },
});
