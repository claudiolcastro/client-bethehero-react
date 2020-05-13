import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo Caso</h1>
          <p>Descreva detalhadamente para encontrar seu heroi!</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form action="">
          <input type="text" placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
