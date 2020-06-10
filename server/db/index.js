// start mysql server in directory: sudo service mysql start
// open mysql shell: mysql -u root

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
const DB_NAME = process.env.DB_NAME || 'op';

// create connection btwn sequelize & mysql database
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  DB_HOST,
  dialect: 'mysql',
});

// test the connection
sequelize.authenticate()
  .then(() => {
    console.log(`Connection has been established with ${database} database successfully.`);
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });


// models
// note: sequelize defaults a primary key 'id' for every model/table


const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone_number: { type: DataTypes.STRING },
}, { underscored: true });


const Campaign = sequelize.define('Campaign', {
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
}, { underscored: true });

// add user id foreign key to all campaigns
Campaign.belongsTo(User, { foreignKey: 'id_organizer' });


const Politician = sequelize.define('Politician', {
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone_number: { type: DataTypes.STRING },
  mailing_address: { type: DataTypes.STRING, allowNull: false },
  organization: { type: DataTypes.STRING, allowNull: false },
  position_type: { type: DataTypes.STRING, allowNull: false },
}, { underscored: true });


// prompts added for campaigns by politician
const Prompt = sequelize.define('Prompt', {
  prompt_text: { type: DataTypes.STRING, allowNull: false },
}, { underscored: true });

// politician and campaign id foreign keys
Prompt.belongsTo(Campaign, { foreignKey: 'id_campaign' });
Prompt.hasOne(Politician, { foreignKey: 'id_politician' });


// comments added to a campaign page by user
const Comment = sequelize.define('Comment', {
  comment_text: { type: DataTypes.STRING, allowNull: false },
}, { underscored: true });

// campaign and user foreign keys
Comment.belongsTo(Campaign, { foreignKey: 'id_politician' });
Comment.hasOne(User, { foreignKey: 'id_user' });


// track which campaigns and politician have associations
const CampaignPolitician = sequelize.define('CampaignPolitician', {}, { underscored: true });

// makes a join table between politicians and campaigns
Politician.belongsToMany(Campaign, { through: CampaignPolitician });


// track which campaigns a user 'joins'
const UserCampaign = sequelize.define('UserCampaign', {}, { underscored: true });

// makes a join table between the users and campaigns
User.belongsToMany(Campaign, { through: UserCampaign });


// hasOne & belongsTo methods:
// .get() & .set()
// example: comment.getUser() or comment.setCampaign()


// belongsToMany methods:
// .get(), .set(), .add()
// example: politician.setCampaign(associatedCampaign)


module.exports = {
  User,
  Campaign,
  Politician,
  Prompt,
  Comment,
  CampaignPolitician,
  UserCampaign,
};
