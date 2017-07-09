/**
 * Created by rookie on 2017/7/9.
 * All copyright belongs to rookie.
 */
/**
 * 单例模式
 * 将所有方法都封装在一个变量中,对外只会产生一个变量,
 * 且只允许实例化一次,减少内存。
 * 模块化的基础。
 */

(function (utils){
    function TrimFun (){
        return "";
    }
    let trim = null;
    window.Utils = {
        run : () => "跑",
        trin : function (){
            //惰性加载,用到时才实例化对象。
            if (!trim){
                trim = new TrimFun();
            }
            return trim;
        },
    };
}());
