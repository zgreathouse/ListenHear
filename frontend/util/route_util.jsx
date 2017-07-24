import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, signedIn }) => (
  <Route path={path} render={(props) => (
    !signedIn ? (<Component {...props} />) : (<Redirect to="/home" />))} />
);

const Protected = ({ component: Component, path, signedIn }) => (
  <Route path={path} render={(props) => (
     signedIn ? (<Component {...props} />) : (<Redirect to="/" />))} />
);

const mapStateToProps = state => (
  {signedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
