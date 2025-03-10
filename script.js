// 导航栏标题打字机动画
function startTypewriter() {
    const titleElement = document.getElementById("dynamic-title");
    const titleText = "梦幻代码王";
    let index = 0;
  
    function typeWriter() {
      if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      } else {
        titleElement.innerHTML += '<span class="blinking-cursor">|</span>';
      }
    }
    typeWriter();
  }
  
  // 自动跳转功能
  function autoRedirect() {
    const targetUrl = "https://www.mhdmw.cn:666/";
    let countdown = 5;
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
  window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
    startTypewriter();
    autoRedirect();
  });