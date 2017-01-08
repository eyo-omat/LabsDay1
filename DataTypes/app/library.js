'use strict'

module.exports = {

dataType: function(variable){
    if (typeof variable === 'undefined' || variable === null ) {
        return 'no value';
    }
    if (typeof variable === 'string') {
        return variable.length;
    }
    if (typeof variable === 'boolean') {
        return variable;
    }
    if (typeof variable === 'number') {
        if (variable < 100) {
            return 'less than 100';
        } else if (variable > 100) {
            return 'more than 100';
        } else {
            return 'equal to 100';
        }
    }
    if (typeof variable.isArray()) {
        if (variable,lenght < 4) {
            return 'undefined';
        } else {
            return variable[3];
        }        
    }
    if (typeof variable === 'function') {
        return variable(true);
    }
        
}
}