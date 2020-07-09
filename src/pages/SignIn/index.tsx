import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="gobarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="Email" icon={FiMail} placeholder="E-mail" />
        <Input
          type="password"
          name="Password"
          icon={FiLock}
          placeholder="Password"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="createAccount">
        <FiLogIn />
        Criar contar
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
