/**
 * Created by cherishsdan on 2016/5/12.
 */
/* js中的单例模式 */

// 使用命名空间
//使用闭包封装私有变量

/*以登陆框为例*/

var getSingle = function(fn){
    var result;
    return function(){
       // console.log(this);
        //console.log(arguments);
        return result || (result = fn.apply(this,arguments));
    }
};

var createLoginLayer = function(){
    var div = document.createElement('div');
    div.innerHTML = 'login';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer = getSingle(createLoginLayer);
document.getElementById('loginBtn').onclick = function(){
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block'
};