import React from 'react'

import LoginImg from '../../assets/login.png'
import Logo from '../../assets/logo.png'
import {
  Container,
  LoginImage,
  Label,
  ContainerItens,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>
          Não possui conta? <a href="https//www.google.com">Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
