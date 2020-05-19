import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FiLogIn } from 'react-icons/fi';
import { loginUser } from '../../store/login';

import { Container, FormSection } from './styles';

import logoImg from '../../assets/images/logo.svg';
import herosImg from '../../assets/images/heroes.png';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [id, setId] = useState(null);

  const isAuth = useSelector((state) => state.login.isAuthenticated);

  useEffect(() => {
    if (isAuth) {
      history.push('/profile');
    }
  }, [isAuth]);

  function handleLogin(e) {
    e.preventDefault();
    dispatch(loginUser(id));
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
