/* https://hacks.mozilla.org/2015/06/es6-in-depth-collections */
"use strict";

var destinations = new Map([["favorite", "France"]]);
destinations.set("last-visited", "Morocco");
destinations.set("dream", "Japan");

for (let key of destinations.keys()) {
  console.log(key);
}

console.log(destinations.get("favorite"));