"use strict";

var generateSolarSystem = function* () {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  for (var planet of planets) {
    yield planet;
  }
}

for (var planet of generateSolarSystem()) {
  console.log(planet);
}