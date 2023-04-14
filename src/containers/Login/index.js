import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login.png'
import Logo from '../../assets/logo2.png'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  Label,
  ContainerItens,
  Input,
  ErrorMessage,
  SignInLink
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('o e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 50, marginBottom: 15 }}>
            Entrar
          </Button>
        </form>

        <SignInLink>
          Não possui conta? <a href="https//www.google.com">Cadastrar</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
