var db  = require('../models');

exports.index = (req, res) => {
  db.Trip.findAll({
    where: {
      UserId: req.user.id
    }
  }).then((dbTrip) => {
    res.render('pages/trips', {
      layout: 'main-trips',
      trip: dbTrip
    });
  });
};

exports.createTrip = (req, res) => {
  // Add id from User onto req.body
  req.body.UserId = req.user.id;
  db.Trip.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};

