
var jasmine = require('jasmine');
var Mammal = require('../app/library.js');
(function(){
  'use strict';
  describe("Mammal Class: Create a Mammal, feed it", function() {

    it("The Mammal should be a type of `object`, and an instance of the `Mammal` class", function() {
      var bear = new Mammal('Bear');
      expect(typeof bear).toEqual(typeof {});
      expect(bear instanceof Mammal).toBeTruthy();
    });

    it("The mammal should be called 'Man' if no name is passed as a parameter", function() {
      var man = new Mammal();
      expect(man.name).toEqual('Man');
      expect(man.habitat).toBe('land');
    });

    it("The mammal name and habitat should be a property of the mammal", function() {
      var seaLion  = new Mammal('Sea Lion', 'Water');
      expect(seaLion.name).toBe('Sea Lion');
      expect(seaLion.habitat).toBe('Water');
    });

   it("The Mammal shoud not be able to swim except if their habitat is water", function() {
      var seaTurtle = new Mammal('Sea Turtle', 'water');
      expect(seaTurtle.canSwim).toBeTruthy();

      var lion = new Mammal('Lion', 'land', 'carnivore');
      expect(lion.canSwim).toBe(false);
      lion.feed(8);
      expect(lion.energyLevel).toBe('640 J');
      expect((function(){return new Mammal('Whale', 'water');}()).canSwim).toBeTruthy();
    });

    it("The Mammal shoud have one (1) diet except its a type of omnivore", function() {
      var tiger  = new Mammal('Tiger', 'land', 'carnivore');
      expect(tiger.diet).toBe(1);

      var man = new Mammal('Man', 'land');
      expect(man.diet).toBe(2);
    });

    it("The Mammal should have energyLevel 0 J until you put `food in the belly`", function() {
      var tilapia  = new Mammal('Tilapia', 'Water', 'herbivore');
      expect(tilapia.canSwim).toBe(true);
      tilapia.feed(4);
      expect(tilapia.energyLevel).toBe('160 J');
    });

    it("The Mammal feed function should return the instance of the Mammal class", function() {
      var man  = new Mammal('Man', 'land', 'omnivore');
      var dog = man.feed(15);
      expect(dog instanceof Mammal).toBeTruthy();
      expect(typeof dog.feed).toBe(typeof (function (){}));
      expect(man.energyLevel).toBe(dog.energyLevel);
    });

  });
})();