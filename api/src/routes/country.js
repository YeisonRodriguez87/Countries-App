const { Router } = require('express');
const { getIdCountry, getAllNameCountries } = require('../controllers/country');

const router = Router();


router.get('/', getAllNameCountries);
router.get('/:id', getIdCountry);



module.exports = router;