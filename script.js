// 导航栏标题打字机动画
function startTypewriter() {
    const titleElement = document.getElementById("dynamic-title");
    const titleText = "梦幻代码王"; // 目标文本
    let index = 0;

    function typeWriter() {
        if (index < titleText.length) {
            titleElement.textContent += titleText.charAt(index); // 逐字显示
            index++;
            setTimeout(typeWriter, 150); // 每个字符间隔150ms
        }
    }
    typeWriter();
}

// 自动跳转功能
function autoRedirect() {
    const targetUrl = "https://www.mhdmw.cn:666/";
    let countdown = 5; // 倒计时时间（秒）
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = targetUrl;
        }
    }, 1000);
}

// 页面加载后启动动画
document.addEventListener("DOMContentLoaded", () => {
    startTypewriter(); // 启动打字机动画
    autoRedirect();    // 启动倒计时跳转
});
