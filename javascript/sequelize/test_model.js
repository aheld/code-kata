const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: './database.sqlite'
});

const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {len: [2,50] } }
  });
  
  

var should = require('chai').should();

describe('User', function() {
  describe('#create', function() {
    it('should validate if valid', function(done) {
        User.sync({force: true}).then(() => {
            User.create({
              firstName: 'John',
              lastName: 'Hancock'
            });
            done();
          });
    });

    it('should throw a validation error if not valid', function(done) {
        User.sync({force: true}).then(() => {
            User.create({
              firstName: 'John',
              lastName: ''
            }).then(function(x) {
                x.should.be.a('Error');
                done();
            }).catch( function (e) { 
                e.should.be.a('Error');
                done(); 
            });
            
          });
    });

  });
});
