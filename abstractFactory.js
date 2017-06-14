/**
 * Created by rookie on 2017/6/14.
 * All copyright belongs to rookie.
 */

function abstractMethodError (){
    throw new Error("子类必须实现该抽象方法");
}

/**
 * 抽象工厂模式
 * 抽象工厂不负责实例化实例,只负责对类型行为进行规范,使其子类必须实现父类定义的行为
 * 抽象工厂其实就是实现子类继承父类的方法
 * 原理：子类使用父类方法时,如果没有实现父类方法,则会通过原型链调用到父类的方法,就会报错。
 * @param subType
 * @param superType
 * @constructor
 */
function AbstractFactory (subType, superType){
    if (typeof AbstractFactory[superType] === "function") {
        subType.prototype = Object.create(new AbstractFactory[superType]());
        subType.prototype.constructor = subType;
    } else {
        throw new Error("没有该抽象类");
    }
}

AbstractFactory.Dog = function (){
    this.type = "Dog";
};

Object.assign(AbstractFactory.Dog.prototype, {
    cry : abstractMethodError,
    run : abstractMethodError,
});

/**
 * 哈士奇狗类
 * @constructor
 */
function Husky (name, sex) {
    this.name = name;
    this.sex = sex;
}

AbstractFactory(Husky, "Dog");

Object.assign(Husky.prototype, {
    run : () => "奔跑",
    cry : () => "旺旺",
});


