const router = require('express').Router();
let City = require('../models/city.model');

router.route('/').get((req, res) => {
  City.find()
    .then(cities => res.json(cities))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const cityname = req.body.cityname;

  const newCity = new City({cityname});

  newCity.save()
    .then(() => res.json('City added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  City.findByIdAndDelete(req.params.id)
    .then(() => res.json('City deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;