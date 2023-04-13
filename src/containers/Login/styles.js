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
  background-color: #373737;
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
    width: 100%;
    margin-bottom: 30px;
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
  width: 100%;
  height: 38px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(1, 1, 1, 0.29);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`

export const Button = styled.button`
  width: 182px;
  height: 36px;
  background-color: #9a5bff;
  color: #ffffff;
  border-radius: 20px;
  border: none;
  margin-top: 50px;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
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
