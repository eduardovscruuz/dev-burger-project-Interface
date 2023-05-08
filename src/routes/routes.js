import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import paths from '../contants/paths'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path={paths.Login} />
        <Route element={<Register />} path={paths.Cadastro} />
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path={paths.Home}
        />
        <Route
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
          path={paths.Products}
        />
        <Route
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
          path={paths.Cart}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.Order}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.ListProducts}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.NewProduct}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.EditProduct}
        />
      </Routes>
    </Router>
  )
}

export default MyRoutes
