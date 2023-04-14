import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 180px;
  height: 36px;
  background-color: #9a5bff;
  color: #ffffff;
  border-radius: 20px;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-10%);
  }
  &:active {
    opacity: 0.8;
  }
`
