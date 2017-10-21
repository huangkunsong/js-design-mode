/**
 * 类继承、最容易实现的继承方式
 * 子类prototype为父类实例
 * 子类即可直接使用父类的实例属性、方法和原型方法和属性
 * 优点：所有子类都可以使用父类的实例属性、方法和原型属性和方法
 * 缺点：所有子类实例共享同一个父类实例,一个子类实例进行父类实例的属性修改会影响到所有的子类。
 *       通过prototype继承,在创建父类时,无法根据子类参数向父类进行传参初始化。
 */
function SuperClass(a,b){
    this.a = a;
    this.b = b;
    this.c = "aa";
}

function SubClass(){
}

SubClass.prototype = new SuperClass(1,2);

var a1 = new SubClass();
var a2 = new SubClass();
/*a1.a=321;
a1.b.push("b");

console.log(a2.a); //123;
console.log(a2.b); //a,b*/
