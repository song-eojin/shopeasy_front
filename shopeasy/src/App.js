/*리액트 애플리케이션의 주요 컴포넌트를 정의하는 파일로, JSX를 사용하여 애플리케이션의 기본 UI와 로직을 구성하는 리액트 컴포넌트를 정의*/

import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      {/*여기에 페이지별 콘텐츠 추가*/}
      <Footer />
    </div>
  );
}

export default App;
