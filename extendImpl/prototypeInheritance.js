/**
 * 原型继承
 * 类继承的一个封装
 * 使用一个空函数并绑定
 */

function inheritObject(o){
    //声明一个过渡函数对象
    function F(){}
    //过渡对象原型指向父类对象
    F.prototype = o;
    //返回一个过渡对象实例,该实例的原型继承的父类对象。
    return new F();
}

var SuperObject = {
    a : 123 ,
    b : ["a","b"]
};

var sub1 = inheritObject(SuperObject);
sub1.a = 321;
sub1.b.push("c");
var sub2 = inheritObject(SuperObject);
console.log(sub2.a); //123
console.log(sub2.b); // a,b,c