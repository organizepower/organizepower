const db = require('./index');

// MODEL METHODS
// note: organizer is term for users that create movements
// only one table for all users - organizers & participants
// all users are participants, some users are organizers


// ADD NEW USER
const addUser = async function(userObj) {
  await db.User.create(userObj);
};

addUser({
  username: 'bobby',
  first_name: 'Bob',
  last_name: 'Mip',
  location: '70119',
  email: 'bobby@gmail.com',
  phone_number: '504-123-4567',
});

// GET USER BY USERNAME
const getUser = async function(username) {
  const user = await db.User.findOne({ where: { username } });
  return user;
};

getUser('bobby');


// ORGANIZER ADDS NEW MOVEMENTS
// one to many relationship
// username is the organizer's username
const addMovement = async function(campaignObj, username) {
  // get the organizer's document
  const user = await db.User.findOne({ where: { username } });
  // create the movement
  const movement = await db.Movement.create(campaignObj);
  // set the user (organizer) foreign key
  movement.setUser(user);
};

addMovement({
  name: 'Justice for Breonna Taylor',
  location: 'Louisville',
  description: 'Lorem ipsum...',
  // add other columns
}, 'bobby');


// ADD NEW POLITICIAN


// USER JOINS MOVEMENT


// USER COMMENTS ON MOVEMENT


// ORGANIZER ADDS PROMPT


// hasOne & belongsTo methods:
// .get() & .set()
// example: comment.getUser() or comment.setMovement()


// belongsToMany methods:
// .get(), .set(), .add()
// example: politician.setMovement(associatedMovement)