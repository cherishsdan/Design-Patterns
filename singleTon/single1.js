/**
 * Created by cherishsdan on 2016/5/12.
 */
/*
传统的单例模式
使用代理实现单例模式，以创建div为例
 */

var createDiv = function(html){
    this.html = html;
    console.log(this.html);
    this.init();
};

createDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};

var proxySingletonCreateDiv = (function(){
    var instance;

    return function(html){
        if(!instance){
            instance = new createDiv(html);
        }
        return instance;
    };

})();

var a = new proxySingletonCreateDiv('s1');
var b = new proxySingletonCreateDiv('s2');
console.log(a === b);