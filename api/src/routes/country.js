const { Router } = require('express');
const { getCountries, getIdCountry, getNameCountry } = require('../controllers/country');

const router = Router();

/*router.get('/', getCountries);
router.get('/:id', getIdCountry);
router.get('/?name', getNameCountry);*/






module.exports = router;