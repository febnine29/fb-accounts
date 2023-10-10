const db = require("../models");
const Account = db.accounts;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.uid) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }

    const account = {
        uid: req.body.uid,
        password: req.body.password,
        country: req.body.country
    };

    Account.create(account)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the account."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Account.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving accounts."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};