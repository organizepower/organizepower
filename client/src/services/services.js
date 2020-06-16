import axios from 'axios';

const getUser = () => {

};

const getMovements = () => {
  return axios.get('/movements')
    .then(response => response.data);
};

const getMovementsLeading = () => {
  return axios.get('/leading');
};

const getMovementsFollowing = () => {
  return axios.get('/following');
};

export {
  getUser,
  getMovements,
  getMovementsLeading,
  getMovementsFollowing,
};
