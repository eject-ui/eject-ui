import { scrollTo, throttle } from '../common/index.js';

/**
 * 滚动条回到顶部
 * @param top 滚动条到什么位置显示按钮
 */
export default (text = 'up', top = 140) => {
    const ej_backTop = document.createElement('div');
    const parent = document.body;

    ej_backTop.className = `ej-back-top`;
    // ej_backTop.
    ej_backTop.innerText = text;
    ej_backTop.onclick = () => {
        scrollTo();
    }
    parent.appendChild(ej_backTop);
    
    parent.onscroll = throttle(() => {
        if (window.scrollY > top) {
            ej_backTop.classList.add('show');
        } else {
            ej_backTop.classList.remove('show');
        }
    }, 60);
}