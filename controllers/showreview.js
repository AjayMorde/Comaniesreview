const Review=require('../models/data');

exports.showAllReviews = async (req, res) => {
    try {
        
        const reviews = await Review.findAll();   // here fetching  all reviews from the my db

        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: 'no reviews' });
        }

        
        res.status(200).json({ reviews });
    } catch (error) {
        console.error('error fetching reviews:', error);
        res.status(500).json({ error: 'something went wrong!!' });
    }
};