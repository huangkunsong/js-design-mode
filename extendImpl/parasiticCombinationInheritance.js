/**
 * 寄生组合继承
 * 子类的原型直接继承父类的原型,实例化子类时在通过call继承父类实例属性、方法。
 * 优点：修复了组合继承的所有缺点。
 * 缺点：会存在一个临时函数F,但这是个空函数,开销非常小。
 */

/**
 * 使用一个空函数的prototype=obj
 * 并返回该函数的实例方式来继承obj
 */
function inheritObject (obj){
    function F (){}
    F.prototype = obj;
    return new F();
}

/**
 * 子类prototype继承父类的prototype
 * 并修正子类的constructor为子类
 */
function inheritPrototype (subClass, superClass){
    var p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
}

/* es5写法
function inheritPrototype (subClass, superClass){
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
}*/

function SuperClass (name){
    this.name = name;
}

SuperClass.prototype.getName = function (){
    return this.name;
};

function SubClass (id, name){
    SuperClass.call(this,name);
    this.id = id;
}

inheritPrototype(SubClass, SuperClass);

SubClass.prototype.getId = function (){
    return this.id;
};


var sub1 = new SubClass(123, "aaaa");
var sub2 = new SubClass(321, "aaaa");
