/* eslint-disable react/require-default-props */
import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components'
import paths from '../contants/paths'

function PrivateRoute({ children }) {
  const user = localStorage.getItem('devburger:userData')

  if (!user) {
    return <Navigate to={paths.Login} />
  }

  if (children.props.isAdmin && !JSON.parse(user).admin) {
    return <Navigate to={paths.Home} />
  }

  return (
    <>
      {!children.props.isAdmin && <Header />}
      {children}
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
