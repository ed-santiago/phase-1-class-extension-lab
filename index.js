class Polygon {
  constructor(arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers;
  }

  get countSides() {
    return this.arrayOfIntegers.length;
  }

  get perimeter() {
    return this.arrayOfIntegers.reduce((total, element) => {
      return total + element;
    }, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [side1, side2, side3] = this.arrayOfIntegers;
    return ((side1 + side2) > side3) && ((side2 + side3) > side1) && ((side3 + side1) > side2);
  }
}

class Square extends Polygon {
  get isValid() {
    return this.arrayOfIntegers.every(val => val === this.arrayOfIntegers[0]);
  }

  get area() {
    return this.arrayOfIntegers[0] ** 2
  }
}

const square = new Square([5,5,5,5])
console.log(square)