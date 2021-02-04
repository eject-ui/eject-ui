/**
 * 消息弹框
 * @param text 提示文字
 * @param type 提示类型：[info, success, wraning, error]
 * @param time 多长时间后消失
 */
export default (text = '消息提示', type = 'info', typeStr, time = 2600) => {
    if (document.getElementById('ej-message')) {
        return;
    }
    const ej_msg = document.createElement('div');
    typeStr = typeStr || type;

    ej_msg.id = 'ej-message';
    ej_msg.className = `ej-message ej-${type}-color ej-${type}-bg`;
    ej_msg.innerText = `${typeStr}：${text}`;
    document.body.appendChild(ej_msg);
    setTimeout(() => {
        ej_msg.style.transform = 'translate(-50%, 20px)';
        ej_msg.style.opacity = 1;
    }, 200)

    setTimeout(() => ej_msg.style.opacity = 0, time - 260)
    setTimeout(() => ej_msg.remove(), time)
}