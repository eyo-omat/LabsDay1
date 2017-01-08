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

    it("should return [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ] for 100", function() {
      expect(myApp.getPrimes(100)).toEqual([ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]);
    });

    it("should return [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ] for 37", function() {
      expect(myApp.getPrimes(37)).toEqual([ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]);
    });

    it("should return [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 ] for 200", function() {
      expect(myApp.getPrimes(200)).toEqual([ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 ]);
    });

  });
});
})();