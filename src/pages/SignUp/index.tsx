import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="gobarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="Name" icon={FiUser} placeholder="Name" />
        <Input name="Email" icon={FiMail} placeholder="E-mail" />
        <Input
          type="password"
          name="Password"
          icon={FiLock}
          placeholder="Password"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="createAccount">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
