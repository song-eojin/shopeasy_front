/*리액트 애플리케이션의 주요 컴포넌트를 정의하는 파일로, JSX를 사용하여 애플리케이션의 기본 UI와 로직을 구성하는 리액트 컴포넌트를 정의*/

import React from "react";
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from './components/pages/Home';
import Mypage from './components/pages/Mypage';      
// import Mypage from './components/pages/Login'; 
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
      {/*여기에 페이지별 콘텐츠 추가*/}
      <Footer />
    </div>
  );
}

export default App;