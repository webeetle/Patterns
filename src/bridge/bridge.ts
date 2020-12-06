interface Color {
  myColor(): string;
}

abstract class Shape {
  color: Color;

  constructor(color: Color) {
      this.color = color;
  }

  info() {
      console.log(`I am a ${this.color} shape.`);
  }
}

export class Red implements Color {
  myColor() {
      return 'red';
  }
}

export class Blue implements Color {
  myColor() {
      return 'blue';
  }
}

export class Circle extends Shape {
  constructor(color: Color) {
      super(color);
  }

  info() {
      console.log(`I am a ${this.color.myColor()} circle.`);
  }
}

export class Triangle extends Shape {
  constructor(color: Color) {
      super(color);
  }

  info() {
    console.log(`I am a ${this.color.myColor()} triangle.`);
  }
}