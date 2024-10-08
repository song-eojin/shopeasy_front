import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'; 
import '../../styles/Header.css'; 

const Header = () => {
  
  return (
    <header className="header">

      <div id="header-top">

        {/*로고*/}
        <div>
          <Link to="/">
            <img src="images/logo.png" id="header-logo" alt="Logo" />
          </Link>
        </div>

        {/*홈바*/}
        <nav className="header-bar" id="header-homebar">
          <ul>
            <li><Link to="/" className="link homebar">Home</Link></li>
            <li><Link to="/mypage" className="link homebar">My Page</Link></li>
            <li><Link to="/login" className="link homebar">Login</Link></li>
          </ul>
        </nav>

        {/*메뉴바-디스플레이 작은 경우*/}
        <nav className="header-bar" id="header-menubar-column">
          <ul>
            <li><Link to="/all" className="link menubar">All</Link></li>
            <li><Link to="/best" className="link menubar">Best</Link></li>
            <li><Link to="/new" className="link menubar">New</Link></li>
            <li><Link to="/women" className="link menubar">Women</Link></li>
            <li><Link to="/men" className="link menubar">Men</Link></li>
          </ul>
        </nav>

      </div>

      <div id="header-bottom">
        
        {/*메뉴바-디스플레이 큰 경우*/}
        <nav className="header-bar" id="header-menubar-row">
          <ul>
            <li><Link to="/all" className="link menubar">All</Link></li>
            <li><Link to="/best" className="link menubar">Best</Link></li>
            <li><Link to="/new" className="link menubar">New</Link></li>
            <li><Link to="/women" className="link menubar">Women</Link></li>
            <li><Link to="/men" className="link menubar">Men</Link></li>
          </ul>
        </nav>

        <div id="header-bottom-fixedset">
          {/* 검색 */}
          <div className="search" id="header-search">
            <input type="text" placeholder="Search..." className="input" />
            <button id="header-search-button">Search</button>
          </div>
          {/* 쇼핑카트 */}
          <div id="header-cart">       
            <Link to="/cart" className="u-shopping-cart">
              <svg className="u-svg-link" viewBox="0 0 16 16">
                <path d="M14.5,3l-2.1,5H6.1L5.9,7.6L4,3H14.5 M0,0v1h2.1L5,8l-2,4h11v-1H4.6l1-2H13l3-7H3.6L2.8,0H0z M12.5,13
                    c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S13.3,13,12.5,13L12.5,13z M4.5,13C3.7,13,3,13.7,3,14.5S3.7,16,4.5,16
                    S6,15.3,6,14.5S5.3,13,4.5,13L4.5,13z" />
              </svg>
            </Link>
            <div className="link" id="header-cart-count">&nbsp;0&nbsp;</div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;