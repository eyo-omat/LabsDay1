
var jasmine = require('jasmine');
var Car = require('../app/library.js');
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
      expect(opel.canSwim).toBeTruthy();

      var lion = new Car('Lion', 'land');
      expect(lion.canSwim).toBe(false);
      lion.feed();
      expect(lion.energyLevel).toBe('250 J');
      expect((function(){return new Car('Koenigsegg', 'Agera R');}()).numOfDoors).toBe(2);
    });

    it("The car shoud have one (1) diet except its a type of omnivore", function() {
      var tiger  = new Mammal('Tiger', 'land', 'Carnivore');
      expect(man.diet).toBe(1);
      expect(man.canSpeak).toBe(false);

      var man = new Car('Man', 'land');
      expect(man.diet).toBe(2);
      expect(man.canSpeak).toBeTruthy();
    });

    it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var Tilapia  = new Car('Tilapia', 'Water', 'herbivore');
      expect(man.canSwim).toBe(true);
      man.drive(7);
      expect(man.speed).toBe('77 km/h');
    });

    it("The car drive function should return the instance of the Car class", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      var drivingMan = man.drive(7);
      expect(drivingMan instanceof Car).toBeTruthy();
      expect(typeof drivingMan.drive).toBe(typeof (function (){}));
      expect(man.energyLevel).toBe(drivingMan.energyLevel);
    });

  });
})();