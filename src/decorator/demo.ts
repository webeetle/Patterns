import * as DecoratorPattern from './decorator'

export function show(): void {
  var dog = new DecoratorPattern.Dog()
  console.log('Oggetto cane Semplice')
  dog.move()
  console.log('Oggetto cane Decorato')
  var superDog = new DecoratorPattern.SuperAnimal(dog)
  superDog.move()
}