'use strict';

describe('Service: Requestapi', function () {

  // load the service's module
  beforeEach(module('labcodesApp'));

  // instantiate service
  var Requestapi;
  beforeEach(inject(function (_Requestapi_) {
    Requestapi = _Requestapi_;
  }));

  it('should do something', function () {
    expect(!!Requestapi).toBe(true);
  });

});
