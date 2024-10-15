const elevators = [  { id: 'elevator1', currentFloor: 1 },
  { id: 'elevator2', currentFloor: 1 },  { id: 'elevator3', currentFloor: 1 }
];
function moveToFloor(elevator, floor) { 
  const elevatorDiv = document.getElementById(elevator.id);  elevatorDiv.style.top = `${floor * 50}px`;
  elevator.currentFloor = floor;}
function findClosestElevator(floor) {
  let closestElevator = null;  let closestDistance = Infinity;
    elevators.forEach(elevator => {
    const distance = Math.abs(elevator.currentFloor - floor);    if (distance < closestDistance) {
      closestDistance = distance;      closestElevator = elevator;
    }  });
    return closestElevator;
}
document.querySelectorAll('.floor').forEach(floorDiv => {  floorDiv.addEventListener('click', function() {
    const floor = parseInt(this.dataset.floor);    const closestElevator = findClosestElevator(floor);
    moveToFloor(closestElevator, floor);  });
});