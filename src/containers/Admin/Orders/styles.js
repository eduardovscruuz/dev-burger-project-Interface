import ReactSelect from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
`

export const PorductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? '700' : '400')};
  border-bottom: ${props =>
    props.isActiveStatus ? '2px solid #9a5bff' : 'none'};
  padding-bottom: 10px;
`
