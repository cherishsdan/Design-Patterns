/* js �汾*/

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