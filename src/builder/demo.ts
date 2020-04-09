import * as BuilderPattern from './builder';

export function show() {
  var cameriere = new BuilderPattern.Cameriere();
  var margherita: BuilderPattern.PizzaBuilder = new BuilderPattern.Margherita();
  var marinara: BuilderPattern.PizzaBuilder = new BuilderPattern.Marinara();
  cameriere.setPizzaBuilder(margherita);
  cameriere.constructPizza();
  var pizza: BuilderPattern.Pizza = cameriere.getPizza();
  console.log(pizza);
}