import { Route, Redirect } from 'react-router-dom';
import React from 'react'

export default function PrivateRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {from: props.location}
            }}
          />
        )
      }
    />
  )
}