import axios from 'axios';

const getMovements = () => {
  return axios.get('/movements')
    .then(response => response.data);
};

export default getMovements;
