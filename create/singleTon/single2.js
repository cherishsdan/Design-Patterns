/**
 * Created by cherishsdan on 2016/5/12.
 */
/* js�еĵ���ģʽ */

// ʹ�������ռ�
//ʹ�ñհ���װ˽�б���

/*�Ե�½��Ϊ��*/

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