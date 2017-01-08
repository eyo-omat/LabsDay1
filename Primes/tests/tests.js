'use strict';

var jasmine = require('jasmine');
var myApp = require('../app/library.js');
var saitama;
var junk = null;
(function() { 
  describe("Get prime Numbers from 0 to n ", function() {
  describe("returns array of prime numbers for n", function() {

    it("should return [0,1,2,3,5] for 6", function() {
      expect(myApp.getPrimes(6)).toEqual([0,1,2,3,5]);
    });

  });
});
})();