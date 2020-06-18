/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/auth';

const { isAuthenticated } = auth;

const PrivateRoute = ({ component: Component, ...remainingProps }) => {
  return (
    <Route
      render={props => (
        true ? (
          <Component {...props} {...remainingProps} />
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
};

export default PrivateRoute;
