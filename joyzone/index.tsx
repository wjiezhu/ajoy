
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 移除 Loading 状态的辅助函数
const removeLoader = () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// 渲染应用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 当脚本执行到这里时，React 已经开始接管，我们可以在微任务队列后移除 loader
// 或者依赖 useEffect，但这里做一个双重保险
requestAnimationFrame(() => {
    // 稍微延迟一点点以确保 React 第一帧渲染完成
    setTimeout(removeLoader, 100); 
});
