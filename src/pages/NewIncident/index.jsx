import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FiArrowLeft } from 'react-icons/fi';
import { createNewIncidentAPI } from '../../services/api';

import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

export default function NewIncident() {
  const history = useHistory();
  const ongId = useSelector((state) => state.login.id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();

    try {
      await createNewIncidentAPI(ongId, title, description, value);
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar o caso.');
    }
  }

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

        <form onSubmit={(e) => handleNewIncident(e)}>
          <input type="text" placeholder="Titulo do caso" onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
          <input type="text" placeholder="Valor em reais" onChange={(e) => setValue(e.target.value)} />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
