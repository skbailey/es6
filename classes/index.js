"use strict";

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

var circle = new Circle(7);
var area = circle.getArea();
var circumference = circle.getCircumference();

console.log(`The area of this circle ${area}`);
console.log(`The area of this circle ${circumference}`);