const express = require('express');
const router  = express.Router();
const controller = require('../controllers').trips

router.use(require("../config/middleware/isAuthenticated"))
router.get('/', controller.index);
router.post('/new', controller.createTrip);

module.exports = router;