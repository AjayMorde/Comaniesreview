const express = require('express');
const router = express.Router();
const routes=require('../controllers/deletereview');

router.delete('/:id',routes.deleteReview)

module.exports=router