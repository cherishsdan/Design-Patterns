/**
 * Created by cherishsdan on 2016/5/12.
 */

/* 基于传统的面向对象语言的实现
  以计算奖金为例
*/

var performaceS = function(){};
performaceS.prototype.calculate = function(salary){
    return salary * 4;
}

var performaceA = function(){};
performaceA.prototype.calculate = function(salary){
    return salary * 3;
}

var Bouns = function(){
    this.salary  = null;
    this.salary = null;
}

Bouns.prototype.setSalary = function(salary){
    this.salary = salary
};
Bouns.prototype.setStrategy = function(strategy){
    this.strategy = strategy
};
Bouns.prototype.getBouns = function(){
    return this.strategy.calculate(this.salary);
}

var bouns = new Bouns();
bouns.setStrategy(new performaceS());
bouns.setSalary(12000);
console.log(bouns.getBouns());