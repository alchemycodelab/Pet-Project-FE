import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className= 'header__logo-box'>
        <img className='header__logo' src={logo} alt='dog-logo' />
      </div>
      <div className='header__text-box'>
        <h1 className='heading__primary'>
          <span className='heading__primary-main'> Dog Out</span>
          <span className='heading__primary-sub'>outside</span>
        </h1>
      </div>
    </header>
  );
};
export default Header;
