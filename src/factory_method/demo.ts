import * as FactoryMethodPattern from './factoryMethod';

export function show() {
  var productA: FactoryMethodPattern.AbstractProduct | null = FactoryMethodPattern.createProduct('A');
  var productB: FactoryMethodPattern.AbstractProduct | null = FactoryMethodPattern.createProduct('B');
  var productC: FactoryMethodPattern.AbstractProduct | null = FactoryMethodPattern.createProduct('C');

  if(productA)
    productA.method();
  else
    console.log('prodotto di tipo A inesistente');

  if(productB)
    productB.method();
  else
    console.log('prodotto di tipo B inesistente');
    
  if(productC)
    productC.method();
  else
    console.log('prodotto di tipo C inesistente');
}