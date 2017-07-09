/**
 * Created by rookie on 2017/7/8.
 * All copyright belongs to rookie.
 */
/**
 * 建造者模式：将一个复杂对象的构建层和表示层分离,通用的建造过程采用不同的表现。
 *  建造者模式和工厂模式都是用于创建对象实例。
 *  但工厂模式关注的是最后得到的对象,不关注创建的过程。
 *  建造者模式则更关注建造的细节,同一个建造方法根据参数的不同可以得到不同的表现。
 *  将一个复杂的对象拆分多个细小对象,通过对外的构造创建出复合对象。
 */
const BuilderResume = (function (){
    
    function Person (name, hobby){
        this.name = name;
        this.hobby = hobby;
    }
    
    Person.prototype.getHobby = function () {
        return this.hobby;
    };
    
    
    function Work (work){
        switch (work){
            case "code" :
                this.work = "程序员";
                this.workDescript = "天天敲代码";
                break;
            case "student":
                this.work = "学生";
                this.workDescript = "天天上课";
                break;
            default:
                throw new Error("没有该职业");
        }
    }
    
    Work.prototype.changeWorkDesc = function (desc) {
        this.workDescript = desc;
    };
    
    return function (name, hobby, work){
        const _person = new Person(name, hobby);
        _person.work = new Work(work);
        return _person;
    };
}());


var a = BuilderResume("张三", "游泳", "code");
