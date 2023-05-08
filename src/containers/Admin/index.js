import React from 'react'
import { useLocation } from 'react-router-dom'

import { SiteMenuAdmin } from '../../components'
import paths from '../../contants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const location = useLocation()

  return (
    <Container>
      <SiteMenuAdmin path={location.pathname} />
      <ContainerItems>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.ListProducts && <ListProducts />}
        {location.pathname === paths.NewProduct && <NewProduct />}
        {location.pathname === paths.EditProduct && <EditProduct />}
      </ContainerItems>
    </Container>
  )
}
