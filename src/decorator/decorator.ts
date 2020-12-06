export abstract class Animal {
  abstract move(): void
}

export abstract class SuperDecorator extends Animal {
  protected comp: Animal

  constructor(decoratedAnimal: Animal) {
    super()
    this.comp = decoratedAnimal
  }

  abstract move(): void
}

export class Dog extends Animal {
  public move(): void {
    console.log("Il cane si sta muovendo...")
  }
}

export class SuperAnimal extends SuperDecorator {

  public move(): void {
    console.log("Inizia a volare...")
    this.comp.move()
    console.log("Atterra...")
  }
}