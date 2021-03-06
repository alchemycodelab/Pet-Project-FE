import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSessionUser } from '../../hooks/getAuth';
import './Nav.scss';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const user = useSessionUser();
  if(!user){
    return (
      <>
        <div className='navigation'>
          <input
            type='checkbox'
            className='navigation__checkbox'
            id='navi-toggle'
            onClick={() => setOpen(!open)}
          />
          <label htmlFor='navi-toggle' className={`navigation__button ${open ? 'navigation__button-open' : 'navigation__button'}`}>
            <span className='navigation__icon'>&nbsp;</span>
          </label>
          <div className={`navigation__background ${open ? 'navigation__background-open' : 'navigation__background'}`}>&nbsp;</div>
          <nav className={`navigation__nav ${open ? 'navigation__nav-open' : 'navigation__nav-close'}`}>
            <ul className='navigation__list'>
              <li className='navigation__item'>
                <NavLink to='/explore' className='navigation__link' onClick={() => setOpen(!open)}>
                Explore
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink to='/signup' className='navigation__link' onClick={() => setOpen(!open)}>
                Sign Up
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink to='/login' className='navigation__link' onClick={() => setOpen(!open)}>
                Login / Log Out
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink to='/about' className='navigation__link' onClick={() => setOpen(!open)}>
                About Us
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink to='/' className='navigation__link' onClick={() => setOpen(!open)}>
                Home
                </NavLink>
              </li>
              {/* <li className='navigation__item'>
              <NavLink to='/about' className='navigation__link' onClick={() => setOpen(!open)}>
                About Devs
              </NavLink>
            </li> */}
            </ul>
          </nav>
        </div>
      </>
    );
  }
  return (
    <>
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
          onClick={() => setOpen(!open)}
        />
        <label htmlFor='navi-toggle' className={`navigation__button ${open ? 'navigation__button-open' : 'navigation__button'}`}>
          <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className={`navigation__background ${open ? 'navigation__background-open' : 'navigation__background'}`}>&nbsp;</div>
        <nav className={`navigation__nav ${open ? 'navigation__nav-open' : 'navigation__nav-close'}`}>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <NavLink to='/explore' className='navigation__link' onClick={() => setOpen(!open)}>
                Explore
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/signup' className='navigation__link' onClick={() => setOpen(!open)}>
                Sign Up
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/login' className='navigation__link' onClick={() => setOpen(!open)}>
                Login / Log Out
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/profile' className='navigation__link' onClick={() => setOpen(!open)}>
              Profile
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/about' className='navigation__link' onClick={() => setOpen(!open)}>
                About Us
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__link' onClick={() => setOpen(!open)}>
                Home
              </NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to={`/zipcode/${user.address.zipcode}`} className='navigation__link' onClick={() => setOpen(!open)}>
                Find 
              </NavLink>
            </li>
            {/* <li className='navigation__item'>
              <NavLink to='/about' className='navigation__link' onClick={() => setOpen(!open)}>
                About Devs
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;

