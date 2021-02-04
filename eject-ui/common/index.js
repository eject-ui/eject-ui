/**
 * 滚动条过渡  默认回到顶部
 * @param ele 元素节点
 */
export const scrollTo = (num, type = 'smooth') => {
    window.scrollTo({
        top: num || 0,
        behavior: type
    });
}

/**
 * 节流
 * @param {*} handler 执行函数
 * @param {*} wait 等待时间
 */
export function throttle (handler, wait = 200) {
    var lastTime = 0;
    return function () {
        var nowTime = new Date().getTime();
        if (nowTime - lastTime > wait) {
            handler.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}