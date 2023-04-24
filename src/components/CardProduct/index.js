/* eslint-disable react/forbid-prop-types */
import React from 'react'
// import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

// import { useCart } from '../../hooks/CartContext'
import Button from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
CardProduct.defaultProps = {
  product: null
}
