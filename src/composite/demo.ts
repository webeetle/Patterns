import * as CompositePattern from './composite'

export function show(): void {
  var leaf1 = new CompositePattern.Leaf("1");
  var leaf2 = new CompositePattern.Leaf("2");
  var leaf3 = new CompositePattern.Leaf("3");

  var composite1 = new CompositePattern.Composite("Comp1");
  var composite2 = new CompositePattern.Composite("Comp2");

  composite1.add(leaf1);
  composite1.add(leaf2);
  composite1.add(leaf3);

  composite1.remove(2);

  composite2.add(leaf1);
  composite2.add(leaf3);

  composite1.operation();
  composite2.operation();
}