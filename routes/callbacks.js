const userlist = require('../models/userlist');

const callbackObject = {};

// Show Homepage
callbackObject.renderHomepage = (req, res) => res.render('home');

// Show Users page
callbackObject.renderUserspage = (req, res) => res.render('users', { userlist });

// Add new user
callbackObject.addNewUser = (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const age = req.body.age;
  const id = userlist.length;

  const newUser = {
    firstName, lastName, email, age, id,
  };

  userlist.push(newUser);
  res.redirect('/users');
};

// Show edit form
callbackObject.showEditForm = (req, res) => {
  const user = userlist[req.params.id];
  res.render('users-edit', { user });
};

// Update user
callbackObject.updateUser = (req, res) => {
  const user = userlist[req.params.id];
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.age = req.body.age;
  res.redirect('/users');
};

// Delete user
callbackObject.deleteUser = (req, res) => {
  delete userlist[req.params.id];
  res.redirect('/users');
};

module.exports = callbackObject;