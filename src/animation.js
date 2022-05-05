import { useFloorStore } from "./store/floor";
const floorStore = useFloorStore();
let cabinMove = [
  { transform: `translateY(${105 * floorStore.chosenFloor + "px"})` },
];

let moveTiming = {
  duration: 2000,
};

export default animation = document
  .getElementById("cabin")
  .animate(cabinMove, moveTiming);
