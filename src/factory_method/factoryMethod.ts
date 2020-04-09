export  interface AbstractProduct {
  method(param?: any): void;
}

export class ConcreteProductA implements AbstractProduct {
  method(param?: any): void {
    console.log("Metodo di ConcreteProductA");
  }
}

export class ConcreteProductB implements AbstractProduct {
  method(param?: any): void {
    console.log("Metodo di ConcreteProductB");
  }
}

export function createProduct(type: string) {
  switch(type) {
    case 'A':
      return new ConcreteProductA();
    case 'B':
      return new ConcreteProductB();
    default:
      return null;
  }
}