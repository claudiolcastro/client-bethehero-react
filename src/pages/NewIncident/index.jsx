import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';
import useAuthenticated from '../../hooks/useAuthenticated';

import logoImg from '../../assets/images/logo.svg';

export default function NewIncident() {
  useAuthenticated();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3333/incidents', {
        title,
        description,
        value,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'a521001a', // TODO: add dinamic id
        },
      })
        .then(() => history.push('/profile'));
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
