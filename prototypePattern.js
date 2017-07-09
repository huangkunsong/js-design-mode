/**
 * Created by rookie on 2017/7/9.
 * All copyright belongs to rookie.
 */
/**
 * 原型模式,使用继承实现
 * 将简单且有差异的属性放到构造函数中,将复杂且或复用性的放到原型中
 * 子类继承时就可以继承父类的所有行为和属性
 */

function Animal (type){
    this.type = type;
}

Object.assign(Animal.prototype, {
    run : () => "跑",
    cry : () => "叫",
});

function Dog (){
    Animal.call(this, "Dog");
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Object.assign(Dog.prototype, {
    cry : () => "旺旺",
});


