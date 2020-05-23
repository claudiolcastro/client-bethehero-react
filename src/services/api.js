import axios from 'axios';

export const fetchUserSession = (id) => axios.post(`${process.env.REACT_APP_API_URL}/login`, { id })
  .then((response) => ({ id, name: response.data.name }))
  .catch((error) => ({ error }));

export const createNewIncidentAPI = (ongId, title, description, value) => axios.post(
  `${process.env.REACT_APP_API_URL}/incidents`,
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
  `${process.env.REACT_APP_API_URL}/incidents/${incidentId}`,
  {
    headers: {
      Authorization: ongId,
    },
  },
)
  .then((response) => response.status);

export const fetchOngIncidentsAPI = (ongId) => axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
  headers: {
    Authorization: ongId,
  },
})
  .then((response) => response.data)
  .catch((error) => console.error(error));

export const createNewOngAPI = (name, email, whatsapp, city, uf) => axios.post(
  `${process.env.REACT_APP_API_URL}/ongs`,
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
