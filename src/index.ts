const readline = require('readline');
import * as AbstractFactoryPattern from './abstract_factory/demo';
import * as BuilderPattern from './builder/demo';
import * as FactoryMethodPattern from './factory_method/demo';
import * as PrototypePattern from './prototype/demo';
import * as SingletonPattern from './singleton/demo';
import * as AdapterPattern from './adapter/demo';
import * as BridgePattern from './bridge/demo';
import * as CompositePattern from './composite/demo';
import * as DecoratorPattern from './decorator/demo';
import * as FacadePattern from './facade/demo';
import * as FlyweightPattern from './flyweight/demo';
import * as ProxyPattern from './proxy/demo';

function printPatternMenu() {
  console.log(`
  1) Singleton 
  2) Abstract Factory
  3) Factory Method
  4) Builder
  5) Prototype
  6) Adapter
  7) Bridge
  8) Composite
  9) Decorator
  10) Facade
  11) Flyweight
  12) Proxy
  `)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

printPatternMenu();

rl.question("quale pattern eseguire?   ", (answer: string) => {
  switch(answer) {
    case '1': SingletonPattern.show(); break;
    case '2': AbstractFactoryPattern.show(); break;
    case '3': FactoryMethodPattern.show(); break;
    case '4': BuilderPattern.show(); break;
    case '5': PrototypePattern.show(); break;
    case '6': AdapterPattern.show(); break;
    case '7': BridgePattern.show(); break;
    case '8': CompositePattern.show(); break;
    case '9': DecoratorPattern.show(); break;
    case '10': FacadePattern.show(); break;
    case '11': FlyweightPattern.show(); break;
    case '12': ProxyPattern.show(); break;
  }
  rl.close();
});