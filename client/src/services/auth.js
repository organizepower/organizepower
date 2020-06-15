class Auth {
  constructor() {
    this.signedIn = false;
  }

  login(cb) {
    this.signedIn = true;
    cb();
  }

  logout(cb) {
    this.signedIn = false;
    cb();
  }

  isSignedIn() {
    return this.signedIn;
  }
}

export default new Auth();
