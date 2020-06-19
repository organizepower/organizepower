/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...remainingProps }) => {
  return (
    <Route
      render={props => (
        isAuthenticated ? (
          <Component {...props} {...remainingProps} />
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
};

export default PrivateRoute;
