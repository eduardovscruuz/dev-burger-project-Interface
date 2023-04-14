import styled from 'styled-components'

import Background from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  background-color: #303030;
  height: 70%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 25px 75px;
  h1 {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 7px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 22px;
    align-self: center;
  }

  img {
    align-self: center;
    width: 250px;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  align-self: flex-start;
  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 360px;
  height: 38px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(1, 1, 1, 0.29);
  border-radius: 5px;
  border: ${props => (props.error ? ' 2px solid #CC1717;' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;

  a {
    text-decoration: underline;
    cursor: pointer;
    color: #ffffff;
  }
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;
`
