import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubimit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const shema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Password é obrigatória'),
        });

        await shema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="gobarber" />

        <Form ref={formRef} onSubmit={handleSubimit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Password"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="createAccount">
          <FiLogIn />
          Criar contar
        </a>
      </Content>

      <Background />
    </Container>
  );
};
export default SignIn;
