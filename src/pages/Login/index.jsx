import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FiLogIn } from 'react-icons/fi';
import { loginUser } from '../../store/login';

import { Container, FormSection } from './styles';

import logoImg from '../../assets/images/logo.svg';
import herosImg from '../../assets/images/heroes.png';

function Login({ submitLogin }) {
  const [id, setId] = useState(null);

  function handleLogin(e) {
    e.preventDefault();
    submitLogin(id);
  }

  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={(e) => handleLogin(e)}>
          <h1>Faça seu Login</h1>

          <input type="text" placeholder="Sua ID" onChange={(e) => setId(e.target.value)} />
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

const mapStateToProps = (state) => ({
  isAuth: state.login.isAuthenticated,
  ongName: state.login.ongName,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ submitLogin: loginUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
