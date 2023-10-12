const express =require('express');
const router = express.Router();
const routes=require('../controllers/addreview');
router.post('/review',routes.addReview )

module.exports=router