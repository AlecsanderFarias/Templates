import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

import Dashboard from '../pages/App/Dashboard';

export default function Routes() {
  return (
    <Switch>
      {/* Auth Routes */}
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      {/* App Routes */}
      <Route path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
}
