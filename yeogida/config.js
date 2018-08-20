var Sequelize = require('Sequelize');
var sequelize = new Sequelize('yeogida','moonsun','201611070',
  {
    'host' : 'yeogida.cbdgg8cil0ro.ap-southeast-1.rds.amazonaws.com',
    'dialect' : 'mysql'
  }
);

var profile=sequelize.define('profile',{
  personpid: {
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  phone : Sequelize.INTEGER,
  kakaonickname:Sequelize.STRING,
  token :Sequelize.STRING,
  email:Sequelize.STRING,
  kakaopid:Sequelize.STRING
}, {
  timestamps : false,
  tableName: profile
});

profile.sync();

module.exports = profile;
