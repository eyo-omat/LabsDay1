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
    if (typeof variable === 'string') {
        return variable.length;
    }
    if (typeof variable === 'string') {
        return variable.length;
    }
        
}
}