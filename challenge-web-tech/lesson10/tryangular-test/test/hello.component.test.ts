require('zone.js');
import 'reflect-metadata';
import { Component } from  "@angular/core";
import {inject} from  "@angular/core/testing";
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;
const { HelloComponent } = require("../src/app/hello.component.ts")

describe('HelloComponent', () => {
  const hello = new HelloComponent();

  it('should create an instance of HelloComponent',() => {
    expect(hello).to.be.an("object");
    expect(hello.name).to.equal("Hello");
  });
})
