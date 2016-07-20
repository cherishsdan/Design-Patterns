/* js °æ±¾*/

var strategies = {
    's': function(salary){
        return salary * 4;
    },

    'A': function(salary){
        return salary * 3;
    }
};

var calculateBouns = function(level,salary){
    return strategies[level](salary);
}