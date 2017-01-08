'use strict';

var jasmine = require('jasmine');
var myApp = require('../app/library.js');
var saitama;
(function() { 
  describe('Data types of a certaim variable: ', function () {

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

  });
})();