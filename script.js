// script.js
document.addEventListener('DOMContentLoaded', () => {
  // 预加载资源
  const preloadResources = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    'https://pic.imgdb.cn/item/66faeacbf21886ccc03d521b.png'
  ];

  preloadResources.forEach(img => {
    new Image().src = img;
  });

  // 加载处理
  window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);
  });
});