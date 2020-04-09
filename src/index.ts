const readline = require('readline');
import * as AbstractFactoryPattern from './abstract_factory/demo';
import * as BuilderPattern from './builder/demo';
import * as FactoryMethodPattern from './factory_method/demo';
import * as PrototypePattern from './prototype/demo';
import * as SingletonPattern from './singleton/demo';

function printPatternMenu() {
  console.log(`
  1) Singleton 
  2) Abstract Factory
  3) Factory Method
  4) Builder
  5) Prototype
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
  }
  rl.close();
});