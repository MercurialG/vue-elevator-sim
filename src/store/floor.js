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
      console.log(queue);
      if (this.currentFloor < queue[0]) {
        queue.sort((a, b) => a - b);
        console.log("Ride up initiated");
        setInterval(this.rideUp, 2000);
      } else {
        queue.sort((a, b) => b - a);
        console.log("Ride down initiated");
        setInterval(this.rideDown, 2000);
      }
    },
    rideUp() {
      for (let i = 0; i < this.floorQueue.length; i++) {
        setInterval(this.currentFloor = this.floorQueue.shift(), 2000)
        console.log("Ride to", this.currentFloor);
      }
    },
    rideDown() {
      for (let i = 0; i < this.secondFloorQueue.length; i++) {
        setInterval(this.currentFloor = this.secondFloorQueue.shift(),2000);
        console.log("Ride to", this.currentFloor);
      }
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
