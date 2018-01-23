const express = require('express');

const router = express.Router();

const callback = require('./callbacks');

// Show homepage
router.get('/', callback.renderHomepage);

// Show all users
router.get('/users', callback.renderUserspage);

// Create route
router.post('/users', callback.addNewUser);

// Show edit form
router.get('/users/:id/edit', callback.showEditForm);

// Update user
router.put('/users/:id', callback.updateUser);

// Delete user
router.delete('/users/:id', callback.deleteUser);

module.exports = router;