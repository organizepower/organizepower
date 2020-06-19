import axios from 'axios';

const auth = {
  isAuthenticated: false,
  authenticate() {

  },
  logout() {
    return axios.get('/logout');
  },
};

export default auth;

// class Auth {
//   constructor() {
//     this.signedIn = false;
//   }

//   login(cb) {
//     this.signedIn = true;
//     cb();
//   }

//   logout(cb) {
//     this.signedIn = false;
//     cb();
//   }

//   isSignedIn() {
//     return this.signedIn;
//   }
// }

// export default new Auth();
