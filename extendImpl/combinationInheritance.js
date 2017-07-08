/**
 * 组合继承
 * 将类继承和构造函数继承组合进行继承
 * 优点：结合了类继承的优点和构造函数继承的优点。
 * 缺点：调用了2次父类的构造方法,存在不必要的开销。
 *       且子类原型继承父类实例,那子类原型里就存在父类的实例属性和方法,
 *       然后实例化子类时又调用call继了父类的实例属性和方法,
 *       这部分实例属性和方法和原型里的实例和方法重复，存在多余的开销。
 */

function SuperClass(name,id){
    this.name = name;
    this.id = id;
    this.arrs = ["a","b"];
}
SuperClass.prototype.getName = function(){
    return this.name;
};

function SubClass(name,id){
    SuperClass.call(this,name,id);
}
SubClass.prototype = new SuperClass();

var sub1 = new SubClass("张三",123);
var sub2 = new SubClass("李四",321);

console.log(sub1.getName()); //张三
console.log(sub2.getName()); //李四

sub1.arrs.push("c");
console.log(sub1.arrs); //a,b,c
console.log(sub2.arrs); //a,b

