'use strict';

var jasmine = require('jasmine');
var myApp = require('../app/library.js');
var saitama;
var junk = null;
(function() { 
  describe('Data types of a certain variable: ', function () {

    describe('Return the length of the the string', function () {

      it('should return 4 for `gate`', function () {
        expect(myApp.dataType("gate")).toEqual(4);
      });

      it('should return 2 for `to`', function () {
        expect(myApp.dataType("to")).toEqual(2);
      });

      it('should return 12 for `hippopotamus`', function () {
        expect(myApp.dataType("hippopotamus")).toEqual(12);
      });

      it('should return 10 for `unchatered`', function () {
        expect(myApp.dataType("unchatered")).toEqual(10);
      });

    });

    describe('Return `no value` for an undefined variable', function () {

      it('should return "no value" for saitama', function () {
        expect(myApp.dataType(saitama)).toEqual("no value");
      });

      it('should return "no value" for undefined', function () {
        expect(myApp.dataType(undefined)).toEqual("no value");
      });

    });

    describe('Return boolean value for an boolean variable', function () {

      it('should return true for true', function () {
        expect(myApp.dataType(true)).toEqual(true);
      });

      it('should return false for false', function () {
        expect(myApp.dataType(false)).toEqual(false);
      });

    });

    describe('Return `no value` for an null variable', function () {

      it('should return "no value" for null', function () {
        expect(myApp.dataType(null)).toEqual("no value");
      });

      it('should return "no value" for junk', function () {
        expect(myApp.dataType(junk)).toEqual("no value");
      });

    });

  });
})();