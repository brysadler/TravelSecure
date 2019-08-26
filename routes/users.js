const express = require('express');
const router  = express.Router();

const passport = require("../config/passport");
const controller = require('../controllers').users

router.get('/signup', controller.registrationPage);
router.get('/sign-out', controller.signOutUser);
router.post('/login', passport.authenticate("local"), controller.loginUser);
router.post('/signup', controller.signUpUser);

module.exports = router;