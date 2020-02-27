import React, { useState } from 'react';
import { useLogin } from '../../hooks/getAuth';
import './Login.scss';
import { Link } from 'react-router-dom';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useLogin();

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <>
      <section className='section-Login'>
        <div className='Logingrid'>
          <div className='Login'>
            <div className='Login__form'>
              <form onSubmit={handleSubmit} className='Loginform'>
                <div className='title'>
                  <h2 className='Loginheading'>Login</h2>
                </div>
                {authError && <p>{authError}</p>}
                <div className='Loginform__group'>
                  <input
                    className='Loginform__input'
                    value={email}
                    name='email'
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder='you@you.com'
                  />
                  <label htmlFor='email' className='Loginform__label'>
                    Email
                  </label>
                </div>
                <div className='Loginform__group'>
                  <input
                    type='password'
                    id='password'
                    className='Loginform__input'
                    value={password}
                    name='password'
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder='******'
                  />
                  <label htmlFor='password' className='Loginform__label'>
                    Password
                  </label>
                </div>
                <Link to={'/zipcode/:zipcode'}>
                  <div className='Loginform__group'>
                    <button className='Loginsubmit'>Submit</button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
