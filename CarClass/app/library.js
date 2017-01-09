'use strict'
var Mammal = function (name= 'Man', habitat= 'land', type='omnivore') {
        this.name = name;
        this.habitat = habitat;
        this.type = type;
        this.energyLevel = '0 J';
        if (habitat === 'land') { 
            this.canSwim = false; 
        } else { 
            this.canSwim = true; 
        }
        if (type === 'omnivore') { 
            this.diet = 2; 
            //this.energyLevel = 8; 
        } else { 
            this.diet = 1;
        }
        this.feed = function (x){ 
            if(type === 'omnivore') { 
                this.energyLevel = (x * 100)+' J'; 
            } else if (type === 'carnivore') {
                this.energyLevel = (x * 80)+' J';
            } else { 
                this.energyLevel = (x * 40)+' J'; 
            } 
            return this;
        };
        
}
module.exports = Mammal;   