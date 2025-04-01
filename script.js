// script.js
document.addEventListener('DOMContentLoaded', () => {
  // 预加载资源（可选）
  const preloadResources = [
    'https://s21.ax1x.com/2024/12/27/pAv7481.jpg',
    'https://pic.imgdb.cn/item/66faeacbf21886ccc03d521b.png'
  ];

  preloadResources.forEach(img => {
    new Image().src = img;
  });
});