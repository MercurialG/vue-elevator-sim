import { defineStore } from 'pinia'

export const useFloorStore = defineStore('floorStore', {
    state: () => ({
      floorCount: [
        {floorNumber: 1},
        {floorNumber: 2},
        {floorNumber: 3},
        {floorNumber: 4},
        {floorNumber: 5}
      ],
      chosenFloor: 3
    }),
    getters: {},
    actions: {}
  })