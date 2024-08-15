/*리액트 애플리케이션의 진입점으로 ReactDOM.render() 메서드를 사용하여 index.html 파일의 <div id="root"> </div>에 렌더링*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />{/*HTML 태그처럼 보이지만 사실 JSX 구문이므로 주석 형태는 이렇게 해야 하며, <App />은 사용자 정의 컴포넌트*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
