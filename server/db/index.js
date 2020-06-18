// start mysql server in directory: sudo service mysql start
// open mysql shell: mysql -u root
// create database locally: create database op;

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const DB_NAME = process.env.DB_NAME || 'op';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
const { DB_INSTANCE, NODE_ENV } = process.env;

let sequelize = null;

if (NODE_ENV === 'production') {
  // production (cloud sql) database connection
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: `/cloudsql/${process.env.DB_INSTANCE}`,
    dialect: 'mysql',
    logging: false, // toggle logging SQL in console
    dialectOptions: {
      socketPath: `/cloudsql/${DB_INSTANCE}`,
    },
  });
} else {
  // development (local) database connection
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // toggle logging SQL in console
  });
}

// test the connection
sequelize.authenticate()
  .then(() => {
    console.log(`Connection has been established with ${DB_NAME} database successfully.`);
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

/*
  MODELS
  notes:
  sequelize defaults a primary key 'id' for every model/table
*/

const User = sequelize.define('user', {
  username: { type: DataTypes.STRING, allowNull: false },
  hash: { type: DataTypes.STRING, allowNull: true },
  salt: { type: DataTypes.STRING, allowNull: true },
  firstName: { type: DataTypes.STRING, allowNull: true },
  lastName: { type: DataTypes.STRING, allowNull: true },
  location: { type: DataTypes.STRING, allowNull: true },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: { type: DataTypes.STRING },
  imageUrl: { type: DataTypes.STRING },
  bio: { type: DataTypes.TEXT },
  lastLogin: { type: DataTypes.DATE },
  status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' },
}, { underscored: true });

const Movement = sequelize.define('movement', {
  // movement info
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  followers: { type: DataTypes.INTEGER },
  emailCount: { type: DataTypes.INTEGER },
  textCount: { type: DataTypes.INTEGER },
  imageUrl: { type: DataTypes.STRING },
  // politician info
  polFirstName: { type: DataTypes.STRING },
  polLastName: { type: DataTypes.STRING },
  polPosition: { type: DataTypes.STRING },
  polEmail: { type: DataTypes.STRING },
  polPhoneNumber: { type: DataTypes.STRING },
  polImageUrl: { type: DataTypes.STRING },
}, { underscored: true });

// track which movements a user 'joins'
const UserMovement = sequelize.define('userMovement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, { underscored: true });

// sync sequelize to create tables in db before adding associations
// force: true will overwrite the tables, good for dev:
// sequelize.sync({ force: true });
sequelize.sync(); // will not drop tables every time

// add user id foreign key to all movements
Movement.belongsTo(User, { foreignKey: 'id_organizer' });
User.hasMany(Movement, { foreignKey: 'id_organizer' });

// makes a join table between the users and movements
User.belongsToMany(Movement, { through: UserMovement, foreignKey: 'id_user' });
Movement.belongsToMany(User, { through: UserMovement, foreignKey: 'id_movement' });

// hasOne & belongsTo methods:
// .get() & .set()
// example: comment.getUser() or comment.setMovement()

// belongsToMany methods:
// .get(), .set(), .add()
// example: politician.setMovement(associatedMovement)

module.exports = {
  sequelize,
  User,
  Movement,
  // Politician,
  // Prompt,
  // Comment,
  // MovementPolitician,
  UserMovement,
};

/*
const Politician = sequelize.define('politician', {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phoneNumber: { type: DataTypes.STRING },
  mailingAddress: { type: DataTypes.STRING, allowNull: false },
  organization: { type: DataTypes.STRING, allowNull: false },
  positionType: { type: DataTypes.STRING, allowNull: false },
  imageUrl: { type: DataTypes.STRING },
}, { underscored: true });

// prompts added for movements by politician
const Prompt = sequelize.define('prompt', {
  promptText: { type: DataTypes.STRING, allowNull: false },
}, { underscored: true });

// comments added to a movement page by user
const Comment = sequelize.define('comment', {
  commentText: { type: DataTypes.STRING, allowNull: false },
}, { underscored: true });

// track which movements and politician have associations
const MovementPolitician = sequelize.define('movementPolitician', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, { underscored: true });
*/

/*
// politician and movement id foreign keys
Prompt.belongsTo(Movement, { foreignKey: 'id_movement' });
Prompt.belongsTo(Politician, { foreignKey: 'id_politician' });

// movement and user foreign keys
Comment.belongsTo(Movement, { foreignKey: 'id_politician' });
Comment.belongsTo(User, { foreignKey: 'id_user' });

// makes a join table between politicians and movements
Politician.belongsToMany(Movement, { through: MovementPolitician, foreignKey: 'id_politician' });
Movement.belongsToMany(Politician, { through: MovementPolitician, foreignKey: 'id_movement' });
*/
