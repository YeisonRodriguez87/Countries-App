const { Router } = require('express');
const { getAllCountries, getIdCountry, getAllNameCountries } = require('../controllers/country');

const router = Router();

//router.get('/', getAllCountries);
router.get('/', getAllNameCountries);
router.get('/:id', getIdCountry);



module.exports = router;