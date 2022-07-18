// #01 - 1000 Lights
// Input: # of switches (n)
// Output: Array of switches that remain on after n repetitions.
// Data structure: Array of booleans.
// Algorithm:
// 1) Iterate through the numbers 1 through n. This represets the repetitions.
// 2) For each repetition, iterate through the list toggling switches, incrementing by a value
//    equal to the current repetition.
// 3) Finally iterate through the switch array, storing the values of the "on" switches. This is returned.
function lightsOn(numberOfswitches) {
  let switches = [];
  for (let repetition = 1; repetition <= numberOfswitches; repetition++) {
    for (let i = repetition; i <= numberOfswitches; i += repetition) {
      toggle(switches, i);
    }
  }
  let onSwitches = [];
  switches.forEach((currentSwitch, index) => {
    if (currentSwitch) onSwitches.push(index);
  });
  return onSwitches;
}

function toggle(switches, index) {
  switches[index] = switches[index] || false;
  switches[index] = !switches[index];
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
