import axios from 'axios';

const getUser = () => {

};

const getMovements = () => {
  return axios.get('/movement');
};

// this is a user route
const getMovementsLeading = (id) => {
  return axios.get(`/profile/leading/:${id}`);
};
// this a user route: user following a movement
const getMovementsFollowing = (id) => {
  return axios.get(`/profile/following/:${id}`);
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
