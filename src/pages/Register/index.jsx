import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

export default function Register() {
  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro e entre na plataforma!</p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form action="">
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Whatsapp" />

          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
