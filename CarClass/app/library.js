'use strict'
var Mammal = function (name= 'Man', habitat= 'land', type='omnivore') {
        this.name = name;
        this.habitat = habitat;
        this.type = type;
        this.energyLevel = '0 J';
        if (habitat === 'land') { this.canSwim = false; } else { this.canSwim = true; }
        if ((type === 'omnivore')) { this.isSaloon = false; this.numOfWheels = 8; } else { this.isSaloon = true; this.numOfWheels = 4; }
        this.drive = function (x){ 
            if(type === 'saloon') { this.speed = (x * 50)+' km/h'; } else { this.speed = (x * 11)+' km/h'; } 
            return this;
        };
        
}
module.exports = Mammal;   