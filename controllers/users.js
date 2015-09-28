var express = require('express');
var usersRoute = express.Router();
var moongoose = require('mongoose');

// To use JSON etc.
var bodyParser = require('body-parser');
usersRoute.use(bodyParser.urlencoded({ extended: false }));
usersRoute.use(bodyParser.json())

//MODEL
var User = require('../models/user')

//(index, show, create, update and delete)
// INDEX
usersRoute.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) console.log(err);
    res.json(users)
  })
});

// SHOW
usersRoute.get('/:id', function(req, res) {
  console.log(req.params.id)
  User.findById(req.params.id, function(err, user) {
    if (err) console.log(err);
    res.json(user)
  })
});

// CREATE
usersRoute.post('/', function(req, res){
  console.log('create user route');
  console.log(req.body);
  var params = req.body;
  var newUser = new User({
    name: params.name,
    gender: params.gender,
    dob: params.date
  })
  newUser.save(function (err, user) {
    if(err) console.log(err);
    console.log('User has been created!');
  res.json(user);
  });
})

// UPDATE
usersRoute.put('/edit/:id', function(req, res) {
  console.log('edit user route');
  console.log(req.body);
  console.log(req.params.id);
  var params = req.body;
  User.findByIdAndUpdate(req.params.id, params, function(err, user){
      if (err) console.log(err)
      res.json(user)
  })
})

// DELETE
usersRoute.delete('/:id', function(req, res) {
  console.log('delete user route');
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) console.log(err);
    res.json(user)
  })
})

module.exports = usersRoute;