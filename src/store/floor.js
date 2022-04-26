import { defineStore } from "pinia";

export const useFloorStore = defineStore("floorStore", {
  state: () => ({
    floorCount: [
      { floorNumber: 1, chosen: true },
      { floorNumber: 2, chosen: true }
    ],
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
          console.log('Queue up sorted')
        } else {
          this.secondFloorQueue.push(nextFloor);
          this.queueSort(this.secondFloorQueue);
          console.log('Queue down sorted')
        }
      }
    },
    queueSort(queue) {
      console.log(queue);
      if (this.currentFloor < queue[0]) {
        queue.sort((a, b) => a - b);
        console.log('Ride up initiated')
        setInterval(this.ride, 2000)
      } else {
        queue.sort((a, b) => b - a);
        console.log('Ride down initiated')
        setInterval(this.ride, 2000)
      }
    },
    ride() { 
      // for (let i = 0;i <= this.floorQueue; i++) {
      //   setTimeout(this.chosenFloor = i, 5000)
      //   console.log('Ride to', this.chosenFloor)
      // }
      this.floorQueue.forEach((element) => {
        this.chosenFloor = element
        console.log('Ride to', this.chosenFloor)
      });
    },
  },
});
