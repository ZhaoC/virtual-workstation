var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  // res.render('index', { user: req.user });
  if(req.user){
    console.log('**** User: '+ req.user.username + 'logged in! ****');
    res.sendFile(path.join(__dirname + '/../build/index.html'));
  } else {
    console.log('**** no user logged in! ****');
    res.render('index', { user: req.user });
  }
});

router.get('/register', function(req, res){
  res.render('register', { });
});

router.post('/register', function(req, res){
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err) {
      return res.render('register', {user: user});
    }

    passport.authenticate('local')(req, res, function(){
      res.redirect('/');
    });
  });
});

router.get('/login', function(req, res){
  if(req.user){
    console.log('**** User: '+ req.user.username + ' currenlty logged in! ****');
    res.sendFile(path.join(__dirname + '/../build/index.html'));
  } else {
    res.render('login', {user: req.user});
  }
  
});

router.post('/login', passport.authenticate('local'), function(req, res){
  res.redirect('/');
});

router.get('/logout', function(req, res){
  console.log('*** User logout! ***');
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  console.log('ping success in server');
  res.status(200).send("ping server successfully!");
});

module.exports = router;
