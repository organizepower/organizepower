import axios from 'axios';

const getUser = () => {

};

const getMovements = () => {
  return axios.get('/movement');
};

// this is a user route
const getMovementsLeading = () => {
  return axios.get('profile/leaders');
};
// this a user route: user following a movement
const getMovementsFollowing = () => {
  return axios.get('/following');
};

const getUserProfileById = (id) => {
  return axios.get(`/profile/:${id}`);
};

export {
  getUserProfileById,
  getMovements,
  getMovementsLeading,
  getMovementsFollowing,
};
