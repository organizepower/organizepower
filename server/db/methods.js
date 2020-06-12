const db = require('./index');

// MODEL METHODS
// note: organizer is term for users that create movements
// only one table for all users - organizers & participants
// all users are participants, some users are organizers


// ADD NEW USER
const addUser = async(userObj) => {
  try {
    await db.User.create(userObj);
  } catch (err) {
    console.error(err);
  }
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
  try {
    const user = await db.User.findOne({ where: { username } });
    return user;
  } catch (err) {
    console.error(err);
  }
};

// getUserByUsername('bobby');

// GET USER BY ID
const getUserById = async(userId) => {
  try {
    const user = await db.User.findOne({ where: { id: userId } });
    return user;
  } catch (err) {
    console.error(err);
  }
};

// getUserById(1);


// EDIT USER BY FIELD
const editUserField = async(userId, prop, newValue) => {
  try {
    await db.User.update({ [prop]: newValue },
      { returning: true, where: { id: userId } });
  } catch (err) {
    console.error(err);
  }
};

// editUserField(1, 'username', 'bobbymcgee');


// UPDATE ENTIRE USER'S RECORD
const editUser = async(userObj) => {
  try {
    await db.User.update(userObj,
      { returning: true, where: { id: userObj.id } });
  } catch (err) {
    console.error(err);
  }
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
  try {
    const user = await db.User.findOne({ where: { id: userId } });
    // create the movement
    const movement = await db.Movement.create(campaignObj);
    // set the user (organizer) foreign key
    movement.setUser(user);
  } catch (err) {
    console.error(err);
  }
};

// addMovement({
//   name: 'Justice for Breonna Taylor',
//   location: 'Louisville',
//   description: 'Lorem ipsum...',
//   // add other columns
// }, 1);

// EDIT MOVEMENT BY FIELD
const editMovementField = async(movementId, prop, newValue) => {
  try {
    await db.Movement.update({ [prop]: newValue },
      { returning: true, where: { id: movementId } });
  } catch (err) {
    console.error(err);
  }
};


// UPDATE ENTIRE MOVEMENT'S RECORD
const editMovement = async(movementObj) => {
  try {
    await db.Movement.update(movementObj,
      { returning: true, where: { id: movementObj.id } });
  } catch (err) {
    console.error(err);
  }
};


// ADD NEW POLITICIAN
const addPolitician = async(politicianObj) => {
  try {
    await db.Politician.create(politicianObj);
  } catch (err) {
    console.error(err);
  }
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

// EDIT POLITICIAN BY FIELD
const editPoliticianField = async(politicianId, prop, newValue) => {
  try {
    await db.Politician.update({ [prop]: newValue },
      { returning: true, where: { id: politicianId } });
  } catch (err) {
    console.error(err);
  }
};


// UPDATE ENTIRE POLITICIAN'S RECORD
const editPolitician = async(politicianObj) => {
  try {
    await db.Politician.update(politicianObj,
      { returning: true, where: { id: politicianObj.id } });
  } catch (err) {
    console.error(err);
  }
};

// LINK POLITICIAN TO MOVEMENT
// pass in politician and movement ids
const linkPoliticianMovement = async(politicianId, movementId) => {
  try {
    const politician = await db.Politician.findOne({ where: { id: politicianId } });
    const movement = await db.Movement.findOne({ where: { id: movementId } });
    politician.addMovement(movement);
  } catch (err) {
    console.error(err);
  }
};

// linkPoliticianMovement(1, 1);


// USER JOINS MOVEMENT
// pass in user and movemenet ids
const linkUserMovement = async(userId, movementId) => {
  try {
    const user = await db.User.findOne({ where: { id: userId } });
    const movement = await db.Movement.findOne({ where: { id: movementId } });
    movement.addUser(user);
  } catch (err) {
    console.error(err);
  }
};

// linkUserMovement(1, 1);


// USER COMMENTS ON MOVEMENT
const addComment = async(userId, movementId, message) => {
  try {
    const comment = await db.Comment.create({ comment_text: message });
    const user = await db.User.findOne({ where: { id: userId } });
    const movement = await db.Movement.findOne({ where: { id: movementId } });
    comment.setUser(user);
    comment.setMovement(movement);
  } catch (err) {
    console.error(err);
  }
};

// addComment(1, 1, 'Test comment');


// ORGANIZER ADDS PROMPT
const addPrompt = async(politicianId, movementId, message) => {
  try {
    const prompt = await db.Prompt.create({ prompt_text: message });
    const politician = await db.Politician.findOne({ where: { id: politicianId } });
    const movement = await db.Movement.findOne({ where: { id: movementId } });
    prompt.setPolitician(politician);
    prompt.setMovement(movement);
  } catch (err) {
    console.error(err);
  }
};

// addPrompt(1, 1, 'Test prompt');

module.exports = {
  addComment,
  addPrompt,
  addMovement,
  addPolitician,
  addUser,
  linkPoliticianMovement,
  linkUserMovement,
  editMovement,
  editMovementField,
  editPolitician,
  editPoliticianField,
  editUser,
  editUserField,
  getUserById,
  getUserByUsername,
};
