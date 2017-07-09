/**
 * Created by rookie on 2017/7/9.
 * All copyright belongs to rookie.
 */
/**
 * 外观模式
 * 将一些复杂的操作封装后提供一个统一的接口。
 * 将复杂的方法简化对外的调用。
 * 常用于写兼容性问题
 *
 * 使用外观模式处理绑定单机事件方法。
 */
function addEvent (dom, type, fn){
    if (dom.addEventListener){
        dom.addEventListener(type, fn);
    } else if (dom.addEvent){
        dom.addEvent(type, fn);
    } else {
        dom[`on${type}`] = fn;
    }
}