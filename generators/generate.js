"use strict";

var generateSolarSystem = function* () {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  for (var planet of planets) {
    yield planet;
  }
}

// for (var planet of generateSolarSystem()) {
//   console.log(planet);
// }

var iterator = generateSolarSystem()
console.log("iterator", iterator);

var val = iterator.next();
// this should be the value out of the iterator,
// essentially and object with two keys: value and done
console.log("iterator return value", val);

