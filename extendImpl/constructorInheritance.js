/**
 * 构造函数继承
 * 在子类构造函数中直接调用父类构造函数,
 * 让父类的实例方法、属性都添加到当前子类的实例上。
 * 优点：相对于类继承,每一个子类实例的属性修改都不会影响到其他的子类实例。
 *       子类可以向父类传参进行初始化。
 * 缺点：子类没有共用父类的属性,只是将父类的实例属性都复制到子类实例上。
 *       子类无法使用父类的原型方法和属性。
 */
function SuperClass(name){
    this.name = name;
    this.a = 123;
}

function SubClass(name){
    SuperClass.call(this,name);
    this.b = 123;
}

SubClass.prototype.getName = function(){
    return this.name;
};

var a1 = new SubClass("张三");
var a2 = new SubClass("李四");
console.log(a1.getName());//张三
console.log(a2.getName());//李四
console.log(a1.a);//123
console.log(a1.b);//123