import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { createNewOngAPI } from '../../services/api';

import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [whatsapp, setWhatsapp] = useState(null);
  const [city, setCity] = useState(null);
  const [uf, setUf] = useState(null);

  const handleNewOng = async (e) => {
    e.preventDefault();

    try {
      const newOng = await createNewOngAPI(name, email, whatsapp, city, uf);

      history.push('/');
      alert(`Cadastro realizado! Seu ID para Login é: ${newOng}`);
    } catch (err) {
      alert('Erro ao cadastrar o Ong.');
    }
  };

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

        <form onSubmit={(e) => handleNewOng(e)}>
          <input type="text" placeholder="Nome da ONG" onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Whatsapp" onChange={(e) => setWhatsapp(e.target.value)} />

          <div className="input-group">
            <input type="text" placeholder="Cidade" onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="UF" style={{ width: 80 }} onChange={(e) => setUf(e.target.value)} />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
