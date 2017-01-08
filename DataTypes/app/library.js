'use strict'

module.exports = {

dataTypes: function(variable){
    if (typeof variable === 'undefined' || variable === null ) {
        return 'no value';
    }
    else if (typeof variable === 'string') {
        return variable.length;
    }
    else if (typeof variable === 'boolean') {
        return variable;
    }
    else if (typeof variable === 'number') {
        if (variable < 100) {
            return 'less than 100';
        } else if (variable > 100) {
            return 'more than 100';
        } else {
            return 'equal to 100';
        }
    }
    else if (typeof variable === 'function') {
            var callBack = variable(true);
            return callBack;
    }
    else if (typeof variable.isArray) {
        if (variable.length < 3) {
            return undefined;
        } else {
            return variable[2];
        }        
    }
        
}
}