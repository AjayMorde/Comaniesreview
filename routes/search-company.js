const express = require('express');
const router = express.Router();
const routes = require('../controllers/searchcompany');

router.get('/search', routes.searchCompany);

module.exports = router;    
