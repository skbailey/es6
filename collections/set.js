/* https://hacks.mozilla.org/2015/06/es6-in-depth-collections */

var planets = new Set(["Mercury", "Venus", "Earth", "Mars"]);
// => 4 planets

planets.add("Jupiter");
// => 5 planets

planets.add("Mercury");
// => Mercury should not be in this set twice

planets.delete("Earth");
// => Kick earth out of the solar system

planets.has("Venus");
// => true

planets.clear();
// => Apocalypse!

var alternateUniverse = new Set(["Aphrodite", "Hades", "Earth"]);
alternateUniverse.union(planets);

console.log(alternateUniverse);