/**
 * Created by rookie on 2017/6/14.
 * All copyright belongs to rookie.
 */
/**
 * 工厂方法模式
 * 工厂类通过对实例类的抽象使其主要负责创建不同的类实例。
 * 将具体的类型写到工厂方法的原型中。
 * 优点：后期添加类,只需要在原型中添加,不需要改动工厂方法。
 */
const AnimalFactory = function (type){
    //安全模式类,确保该类是new调用,不是直接使用
    if (this instanceof AnimalFactory){
        return new this[type]();
    } else {
        return new AnimalFactory(type);
    }
};

Object.assign(AnimalFactory.prototype, {
    Dog : () => {
        this.type = "Dog";
    },
    Cat : () => {
        this.type = "Cat";
    },
});
