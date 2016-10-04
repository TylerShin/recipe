import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Import containers
import App from './app';
import RacipeFormContainer from './containers/racipeForm';

export default (
  <Route name="app" path="/" component={App}>
    <Route name="recipe" path="racipe">
      <Route name="recipeForm" path="new" component={RacipeFormContainer} />
    </Route>
  </Route>
);
