/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react';

import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';

import DefaultLayout from '../pages/_layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const { signed } = store.getState().auth;
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  admin: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  admin: false,
};
