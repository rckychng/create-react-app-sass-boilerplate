import React from 'react';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-bar">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title">Welcome to React</h1>
      </div>
      <p className="header__intro">
        To get started, edit <code>src/scripts/App.js</code> and save to reload.
      </p>
    </header>
  )
}

export default Header;