class Foo {
  constructor(thing) {
    this.thing = thing;
  }

  getThing() {
    return this.thing;
  }

  compute(bar) {
    var quix = bar + this.thing;
    return quix;
  }

  getGenerator() {
    return function * generator(){
      yield 5;
      yield 6;
      yield 7;
    };
  }
}

window['foo'] = new Foo('str');
