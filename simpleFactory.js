/**
 * Created by rookie on 2017/6/14.
 * All copyright belongs to rookie.
 */

/**
 * 简单工厂模式,静态工厂方法
 * 通过对外提供同一类型的接口(factory),根据不同的参数得到不同的结果
 * 简单工厂模式一个工厂方法也可以生成不同类型的实例,但不符合单一原则。且对使用者定义也不明确
 * 优点：使用者只需要记住接口方法factory就可以,不用记住所有的类型。
 * 缺点：每添加一种类型都需要修改2个地方,需要定义类型的类和switch中的该类型的处理。
 * @param type string 类型
 */
// eslint-disable-next-line no-unused-vars
const AnimalFactory = (function (){
    function Cat (){
        this.type = "cat";
    }
    Cat.prototype.cay = function () {
        return "喵喵";
    };
    function Dog (){
        this.type = "dog";
    }
    Dog.prototype.cay = function () {
        return "旺旺";
    };
    return function (type){
        switch (type){
            case "dog" :
                return new Dog();
            case "cat" :
                return new Cat();
            default :
                return new Error("not type");
        }
    };
}());

/**
 * 相比起第一种简单工厂模式,将同一类型中公共的部分提取出来,
 * 在针对不同的参数添加不同的行为。
 * 优点：代码重复率较低。
 * 缺点：第一种方式,如果同一type,得到的都是同一个类的实例,将共享prototype
 *      第二种方式,每次都是新的实例,同样的type也会得到不同的实例
 */
// eslint-disable-next-line no-unused-vars
const AnimalFactory2 = (function (){
    return function (type){
        const o = {
            type : type,
            run : () => "跑",
        };
        switch (type){
            case "cat" :
                o.cry = () => "喵喵";
                break;
            case "doog" :
                o.cry = () => "旺旺";
                break;
            default:
                return new Error("not type");
        }
        
    };
}());
