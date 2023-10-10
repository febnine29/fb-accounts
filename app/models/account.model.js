module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
      uid: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      }
    });
  
    return Account;
};