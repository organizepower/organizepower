const db = require('./index');

// MODEL METHODS
// note: organizer is term for users that create movements
// only one table for all users - organizers & participants
// all users are participants, some users are organizers


// ADD NEW USER
const addUser = async(userObj) => {
  await db.User.create(userObj);
};

// addUser({
//   username: 'bobby',
//   first_name: 'Bob',
//   last_name: 'Mip',
//   location: '70119',
//   email: 'bobby@gmail.com',
//   phone_number: '504-123-4567',
// });


// GET USER BY USERNAME
const getUserByUsername = async(username) => {
  const user = await db.User.findOne({ where: { username } });
  return user;
};

// getUserByUsername('bobby');

// GET USER BY ID
const getUserById = async(userId) => {
  const user = await db.User.findOne({ where: { id: userId } });
  return user;
};

// getUserById(1);


// EDIT USER BY FIELD
const editUserField = async(userId, prop, newValue) => {
  await db.User.update({ [prop]: newValue },
    { returning: true, where: { id: userId } });
};

// editUserField(1, 'username', 'bobbymcgee');


// UPDATE ENTIRE USER'S RECORD
const editUser = async(userObj) => {
  await db.User.update(userObj,
    { returning: true, where: { id: userObj.id } });
};

// editUser({
//   id: 1,
//   username: 'bumblebee',
//   first_name: 'Bobby',
//   last_name: 'Mip',
//   location: '70119',
//   email: 'bobby@gmail.com',
//   phone_number: '504-123-4567',
// });


// ORGANIZER ADDS NEW MOVEMENT
// one to many relationship
const addMovement = async(campaignObj, userId) => {
  // get the organizer's record
  const user = await db.User.findOne({ where: { id: userId } });
  // create the movement
  const movement = await db.Movement.create(campaignObj);
  // set the user (organizer) foreign key
  movement.setUser(user);
};

// addMovement({
//   name: 'Justice for Breonna Taylor',
//   location: 'Louisville',
//   description: 'Lorem ipsum...',
//   // add other columns
// }, 'bobby');


// ADD NEW POLITICIAN
const addPolitician = async(politicianObj) => {
  await db.Politician.create(politicianObj);
};

// addPolitician({
//   first_name: 'Latoya',
//   last_name: 'Cantrell',
//   location: 'New Orleans',
//   email: 'mayor@nola.gov',
//   mailing_address: 'xyz',
//   organization: 'City Goverment',
//   position_type: 'mayor',
// });


// LINK POLITICIAN TO MOVEMENT
// pass in politician and movement ids
const linkPoliticianMovement = async(politicianId, movementId) => {
  const politician = await db.Politician.findOne({ where: { id: politicianId } });
  const movement = await db.Movement.findOne({ where: { id: movementId } });
  politician.addMovement(movement);
};

// linkPoliticianMovement(1, 1);


// USER JOINS MOVEMENT
// pass in user and movemenet ids
const linkUserMovement = async(userId, movementId) => {
  const user = await db.User.findOne({ where: { id: userId } });
  const movement = await db.Movement.findOne({ where: { id: movementId } });
  user.addMovement(movement);
};

// linkUserMovement(1, 1);


// USER COMMENTS ON MOVEMENT
const addComment = async(userId, movementId, message) => {
  const comment = await db.Comment.create({ comment_text: message });
  const user = await db.User.findOne({ where: { id: userId } });
  const movement = await db.Movement.findOne({ where: { id: movementId } });
  comment.setUser(user);
  comment.setMovement(movement);
};

// addComment(1, 1, 'Test comment');

// ORGANIZER ADDS PROMPT
const addPrompt = async(politicianId, movementId, message) => {
  const prompt = await db.Prompt.create({ prompt_text: message });
  const politician = await db.Politician.findOne({ where: { id: politicianId } });
  const movement = await db.Movement.findOne({ where: { id: movementId } });
  prompt.setPolitician(politician);
  prompt.setMovement(movement);
};

// addPrompt(1, 1, 'Test prompt');
