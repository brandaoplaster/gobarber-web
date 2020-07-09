import React, { useCallback } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Informe um email valido'),
        password: Yup.string().min(6, 'No minimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (erro) {
      console.log(erro);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="gobarber" />

        <Form onSubmit={handleSubmit}>
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
        </Form>

        <a href="createAccount">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
