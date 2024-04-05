const express = require('express');
const router = express.Router();
const { createDamageReport } = require('../controllers/damageReportController');

router.post('/', createDamageReport);

module.exports = router;
