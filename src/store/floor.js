import { defineStore } from "pinia";

export const useFloorStore = defineStore("floorStore", {
  state: () => ({
    floors: [
      { floorNumber: 1, chosen: false, current: true },
      { floorNumber: 2, chosen: false, current: false },
    ],
    chosenFloor: 1,
    currentFloor: 1,
    floorQueue: [],
    secondFloorQueue: [],
    elevator: 0,
  }),
  getters: {
    floorsCount: (state) => state.floors,
  },
  actions: {
    setFloorCount(num) {
      this.floors = [];
      if (num <= 20) {
        for (let i = 1; i <= num; i++) {
          this.floors.push({ floorNumber: i, chosen: false });
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
          console.log("Queue up sorted");
        } else {
          this.secondFloorQueue.push(nextFloor);
          this.queueSort(this.secondFloorQueue);
          console.log("Queue down sorted");
        }
      }
    },
    queueSort(queue) {
      this.elevator = document.getElementById("cabin");
      console.log(queue);
      if (this.currentFloor < queue[0]) {
        queue.sort((a, b) => a - b);
        console.log("Ride up initiated");
        this.rideUp();
      }
      // if ((this.currentFloor = queue[0])) {
      //   console.log("You already are on this floor");
      // }
      else {
        queue.sort((a, b) => b - a);
        console.log("Ride down initiated");
        this.rideDown();
      }
    },

    rideUp() {
      for (let i = 0; i < this.floorQueue.length; i++) {
        this.currentFloor = this.floorQueue.shift();
        console.log("Ride to", this.currentFloor);
        this.runUp();
      }
    },
    rideDown() {
      for (let i = 0; i < this.secondFloorQueue.length; i++) {
        this.currentFloor = this.secondFloorQueue.shift();
        console.log("Ride to", this.currentFloor);
        this.runDown();
      }
    },
    runUp() {
      this.elevator.classList.toggle("elevator-up");
    },
    runDown() {
      this.elevator.classList.toggle("elevator-down");
    },

    // this.floorQueue.forEach((element) => {
    //   this.chosenFloor = element
    //   console.log('Ride to', this.chosenFloor)
    // });
    // while (this.floorQueue.length) {
    //   setInterval(
    //     this.currentFloor = this.floorQueue[i]
    //   )
  },
});
