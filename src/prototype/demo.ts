import * as PrototypePattern from './prototype';

export function show() {
  var builder : PrototypePattern.Builder = new PrototypePattern.Builder();
  var i = 0;
  for (i = 1; i <= 3; i += 1) {
      console.log(builder.createOne("cp" + i).toString());
  }
}