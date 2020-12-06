import * as ProxyPattern from './proxy'

export function show() : void {
  var proxy1: ProxyPattern.Proxy = new ProxyPattern.Proxy("proxy1");
  var proxy2: ProxyPattern.Proxy = new ProxyPattern.Proxy("proxy2");

  proxy1.doAction();
  proxy1.doAction();
  proxy2.doAction();
  proxy2.doAction();
  proxy1.doAction();

}