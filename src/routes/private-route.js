/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import PropTypes from 'prop-types'

const PrivateRoute = ({ element, ...rest }) => {
  const user = localStorage.getItem('devburger:userData')

  return user ? <Outlet /> : <Navigate to="login" />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
