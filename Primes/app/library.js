'use strict'

module.exports = {

getPrimes: function(n){
var primeArray = [];
var isPrime = function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if(num % i == 0 )
            return false;
    }
    return true;
};

    for (var i = 0; i < n; i++) {
            if (isPrime(i)) {
                primeArray.push(i);
            }
    }
return primeArray;        
}
}