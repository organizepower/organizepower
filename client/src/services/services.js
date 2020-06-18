import axios from 'axios';

const getUser = () => {

};

const getMovements = () => {
  return axios.get('/movements')
    .then(response => response.data);
};

// this is a user route
const getMovementsLeading = () => {
  return axios.get('profile/leaders');
};
// this a user route: user following a movement
const getMovementsFollowing = () => {
  return axios.get('/following');
};

export {
  getUser,
  getMovements,
  getMovementsLeading,
  getMovementsFollowing,
};
