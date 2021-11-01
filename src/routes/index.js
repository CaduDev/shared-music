import React from 'react';

import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './routes';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" isPrivate component={Home} />
      </Switch> 
    </BrowserRouter>
  );
}
