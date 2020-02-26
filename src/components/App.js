import React from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';
import Nav from './nav/Nav';
// import ExplorePage from './testimonials/ExplorePage'
import UserList from './user/UsersList';
import { SessionProvider } from '../hooks/getAuth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <SessionProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            {/* <Route path='/explore' component={ExplorePage} /> */}
            <Route path='/messages/:id' component={Login} />
            <Route path='/zipcode/:zipcode' component={UserList} />
          </Switch>
        </SessionProvider>
      </Router>
    </>
  );
}
