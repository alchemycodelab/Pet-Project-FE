import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />
        <label htmlFor='navi-toggle' className='navigation__button'>
          <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link'>
                Discover
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link'>
                Sign Up
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link'>
               Profile
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link'>
                Search
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link'>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;

