import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import { fetchOngIncidents } from '../../store/profile';

import { Container, List } from './styles';

import logoImg from '../../assets/images/logo.svg';

function Profile({
  id, ongName, incidents, listIncidents,
}) {
  useEffect(() => {
    listIncidents(id);
  }, []);

  function renderIncidents() {
    return incidents.map((incident) => (
      <li>
        <strong>CASO:</strong>
        <p>{incident.title}</p>

        <strong>DESCRIÇÃO:</strong>
        <p>{incident.description}</p>

        <strong>VALOR:</strong>
        <p>
          R$
          {' '}
          {incident.value}
        </p>

        <button type="button">
          <FiTrash2 size={20} color="#a8a8b3" />
        </button>
      </li>
    ));
  }

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
        {renderIncidents()}
      </List>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  id: state.login.id,
  ongName: state.login.ongName,
  incidents: state.profile.ongIncidents,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { listIncidents: fetchOngIncidents },
  dispatch,
);


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
