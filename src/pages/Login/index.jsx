import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import { Container, FormSection } from './styles';

import logoImg from '../../assets/images/logo.svg';
import herosImg from '../../assets/images/heroes.png';

export default function Login() {
  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be The Hero" />

        <form action="">
          <h1>Faça seu Login</h1>

          <input type="text" placeholder="Sua ID" />
          <button type="submit" className="button">Login</button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </FormSection>

      <img src={herosImg} alt="Heroes" />
    </Container>
  );
}
