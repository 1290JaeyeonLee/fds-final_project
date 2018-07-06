import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar({
  username = null, // 표시할 사용자 이름
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
  admin = false,
}) {
  return (
    <React.Fragment>
      {/* <div className="back">
        <video
          className="bckgd-video"
          src="https://cdn.glitch.com/f41b492f-b6c5-470c-b7e7-586981c597cf%2Fsample.mp4?1530698928410"
          autoPlay="autoPlay"
          loop="loop"
          preload="auto"
          muted="true"
        />
      </div> */}
      <div className="content_dummy-box">
        <h1 className="h1">
          <Link to="/main">MOODSELLER</Link>
        </h1>
      </div>
      <div className="navbar_main">
        <aside className="menu">
          <p className="menu-label">ACCOUNT</p>
          <ul className="menu-list">
            {admin ? (
              <React.Fragment>
                <span className="navbar-item">Welcome Admin!</span>
                <li>
                  <NavLink to="/cart" className="navbar-item">
                    CART
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orderhistory" className="navbar-item">
                    ORDER
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin" className="navbar-item">
                    ADMIN
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/main"
                    onClick={e => onLogout()}
                    className="navbar-item"
                  >
                    LOGOUT
                  </Link>
                </li>
              </React.Fragment>
            ) : username ? (
              <React.Fragment>
                <span className="navbar-item">Welcome {username}!</span>
                <li>
                  <NavLink to="/cart" className="navbar-item">
                    CART
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orderhistory" className="navbar-item">
                    ORDER
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/main"
                    onClick={e => onLogout()}
                    className="navbar-item"
                  >
                    LOGOUT
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="menu__login-btn">
                  <Link to="/login" className="navbar-item">
                    LOGIN
                  </Link>
                </li>
                <li className="menu__signup-btn">
                  <Link to="/signup" className="navbar-item">
                    SIGNUP
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
          <p className="menu-label">Product</p>
          <ul className="menu-list">
            <li>
              <NavLink className="navbar-item" to="/top">
                top
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/coat">
                coat
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/bottom">
                bottom
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/shoes">
                shoes
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/bag">
                bag
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </React.Fragment>
  );
}
