const db = require('./index');

// model method documentation


// async/await add user
async function addUser(userObj) {
  await db.User.create(userObj);
}

addUser({
  username: 'bobby',
  first_name: 'Bob',
  last_name: 'Mip',
  location: '70119',
  email: 'bobby@gmail.com',
  phone_number: '504-123-4567',
});


// promises add user
const meg = db.User.create({
  username: 'meg',
  first_name: 'Meg',
  last_name: 'Boop',
  location: '70119',
  email: 'meg@gmail.com',
  phone_number: '504-123-4567',
})
  .then(user => user)
  .catch(err => console.log(err));


// get user by username
const bob = db.User.findOne({ where: { username: 'bobby' } })
  .then(user => {
    console.log(user.first_name);
    return user;
  }) // logs the user obj returned by sequelize
  .catch(err => console.log(err));


// organizer adds movement
// need to pass in user/organizer obj to movement.setUser()

// with promises
db.User.findOne({ where: { username: 'bobby' } })
  .then(user => {
    db.Movement.create({
      name: 'Justice for George Floyd',
      location: 'Minneapolis',
      description: 'Lorem ipsum...',
      // add other columns
    })
      .then(movement => {
        movement.setUser(user);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

// async/await
async function addMovement(campaignObj, username) {
  const user = await db.User.findOne({ where: { username } });
  const movement = await db.Movement.create(campaignObj);
  movement.setUser(user);
}

addMovement({
  name: 'Justice for Breonna Taylor',
  location: 'Louisville',
  description: 'Lorem ipsum...',
  // add other columns
}, 'meg');

// adds politician

// user joins campaign

// user comments on campaign

// organizer adds prompt


// hasOne & belongsTo methods:
// .get() & .set()
// example: comment.getUser() or comment.setMovement()


// belongsToMany methods:
// .get(), .set(), .add()
// example: politician.setMovement(associatedMovement)