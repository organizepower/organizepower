const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../db/index');
const { validPassword } = require('./passwordUtils');

module.exports = {
  passport,
};
