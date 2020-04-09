import * as AbstractFactoryPattern from './abstractFactory';

export function show() {
		var factory1: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory1();
		var client1: AbstractFactoryPattern.Client = new AbstractFactoryPattern.Client(factory1);
		client1.test();

		var factory2: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory2();
		var client2: AbstractFactoryPattern.Client = new AbstractFactoryPattern.Client(factory2);
		client2.test();
}