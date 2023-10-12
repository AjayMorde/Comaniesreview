const express =require('express');
const router = express.Router();
const routes=require('../controllers/showreview');
router.get('/showreview',routes.showAllReviews )

module.exports=router