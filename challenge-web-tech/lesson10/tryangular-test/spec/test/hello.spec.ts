const { HelloComponent } = require("../../src/app/hello.component.ts")
const reporter = require('jasmine-json-reporter');
jasmine.getEnv().addReporter(reporter);

describe('HelloComponent', () => {
  it('should create an instance of HelloComponent',() => {
    let hello = new HelloComponent();
    expect(hello).toBeTruthy();
    expect(hello.name).toEqual("Hello");
  });
})
