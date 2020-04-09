import * as SingletonPattern from './singleton';

export function show() {
  var singleton1 = SingletonPattern.Singleton.getInstance();
  var singleton2 = SingletonPattern.Singleton.getInstance();
  if(singleton1 === singleton2)
    console.log("le due instanze sono equivalenti")
  else
    console.log("le due instanze non sono equivalenti")
}