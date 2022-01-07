const { Router } = require('express');
const { postActivity, getAllActivities } = require('../controllers/activity');

const router = Router();

router.post('/', postActivity);
router.get('/', getAllActivities)


module.exports = router;