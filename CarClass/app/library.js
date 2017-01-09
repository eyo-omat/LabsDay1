'use strict'
var Car = function (name= 'General', model= 'GM', type='saloon') {
        this.name = name;
        this.model = model;
        this.type = type;
        this.speed = '0 km/h';
        if ((name === 'Porshe') || (name === 'Koenigsegg')) { this.numOfDoors = 2; } else { this.numOfDoors = 4; }
        if ((type === 'trailer')) { this.isSaloon = false; this.numOfWheels = 8; } else { this.isSaloon = true; this.numOfWheels = 4; }
        this.drive = function (x){ 
            if(type === 'saloon') { this.speed = (x * 50)+' km/h'; } else { this.speed = (x * 11)+' km/h'; } 
            return this;
        };
        
}
module.exports = Car;   