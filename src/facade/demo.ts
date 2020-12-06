import * as FacadePattern from './facade'

export function show(): void {
  var facade: FacadePattern.Facade = new FacadePattern.Facade();
  facade.operation1();
  facade.operation2();
}