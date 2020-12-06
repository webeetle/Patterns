import * as BridgePattern from './bridge';

export function show() {
  const circle = new BridgePattern.Circle(new BridgePattern.Red());
  const triangle = new BridgePattern.Triangle(new BridgePattern.Blue());
  circle.info()
  triangle.info()
}