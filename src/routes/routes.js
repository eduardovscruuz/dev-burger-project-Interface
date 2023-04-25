import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Cart, Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
