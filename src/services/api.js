import axios from 'axios';

export const fetchUserSession = (id) => axios.post('http://localhost:3333/login', { id })
  .then((response) => ({ id, name: response.data.name }))
  .catch((error) => ({ error }));

export const createNewIncidentAPI = (ongId, title, description, value) => axios.post(
  'http://localhost:3333/incidents',
  {
    title,
    description,
    value,
  },
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: ongId,
    },
  },
)
  .then((response) => response.status)
  .catch((error) => ({ error }));

export const deleteIncidentAPI = (ongId, incidentId) => axios.delete(
  `http://localhost:3333/incidents/${incidentId}`,
  {
    headers: {
      Authorization: ongId,
    },
  },
)
  .then((response) => response.status);

export const fetchOngIncidentsAPI = (ongId) => axios.get('http://localhost:3333/profile', {
  headers: {
    Authorization: ongId,
  },
})
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const createNewOngAPI = (name, email, whatsapp, city, uf) => axios.post(
  'http://localhost:3333/ongs',
  {
    name,
    email,
    whatsapp,
    city,
    uf,
  }, {
  },
)
  .then((response) => response.data.id)
  .catch((error) => console.error(error));
