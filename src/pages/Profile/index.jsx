import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import { fetchOngIncidents } from '../../store/profile';
import useAuthenticated from '../../hooks/useAuthenticated';

import { Container, List } from './styles';

import logoImg from '../../assets/images/logo.svg';

export default function Profile() {
  useAuthenticated();

  const dispatch = useDispatch();
  const id = useSelector((state) => state.login.id);
  const ongName = useSelector((state) => state.login.ongName);
  const incidents = useSelector((state) => state.profile.ongIncidents);

  useEffect(() => {
    dispatch(fetchOngIncidents(id));
  }, [id]);

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span className="title">
          Bem vinda,
          {' '}
          {ongName}
        </span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <List>
        {
          incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>
                {' '}
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
              </p>

              <button type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
        }
      </List>
    </Container>
  );
}
