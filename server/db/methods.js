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


// organizer adds campaign
// need to pass in user/organizer's primary key id

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