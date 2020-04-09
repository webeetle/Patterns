export abstract class PizzaBuilder {
  protected pizza!: Pizza;

  public getPizza(): Pizza {
    return this.pizza;
  }

  public createNewPizza(): void {
    this.pizza = new Pizza();
  }

  abstract buildImpasto(): any;
  abstract buildSalsa(): any;
  abstract buildCondimenti(): any;
}

export class Pizza {
  private _impasto!: string;
  private _salsa!: string | undefined;
  private _condimenti!: Array<string>;

  get impasto(): string {
      return this._impasto;
  }

  set impasto(value: string) {
      this._impasto = value;
  }
  get salsa(): string | undefined {
    return this._salsa;
  }

  set salsa(value: string | undefined) {
    this._salsa = value;
  }
  
  get condimenti() : Array<string> {
    return this._condimenti;
  }
  set condimenti(values: Array<string>) {
    this._condimenti = values;
  }

}

export class Margherita extends PizzaBuilder {
  buildImpasto() {
    this.pizza.impasto = 'Normale';
  }
  buildSalsa() {
    this.pizza.salsa = 'Pomodoro';
  }
  buildCondimenti() {
    this.pizza.condimenti = ['Mozzarella di Bufala', 'Basilico', 'Olio'];
  }
  
}

export class Marinara extends PizzaBuilder {
  buildImpasto() {
    this.pizza.impasto = 'Normale';
  }
  buildSalsa() {
    this.pizza.salsa = 'Pomodoro';
  }
  buildCondimenti() {
    this.pizza.condimenti = ['Aglio', 'Origano', 'Olio'];
  }
  
}

export class Cameriere {
  private pizzaBuilder!: PizzaBuilder;

  public setPizzaBuilder(pb: PizzaBuilder) {
    this.pizzaBuilder = pb;
  }

  public getPizza() {
    return this.pizzaBuilder.getPizza();
  }

  public constructPizza() {
    this.pizzaBuilder.createNewPizza();
    this.pizzaBuilder.buildImpasto();
    this.pizzaBuilder.buildSalsa();
    this.pizzaBuilder.buildCondimenti();
  }
}