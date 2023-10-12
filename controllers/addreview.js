const Review=require('../connection/data');
const addReview = async (req, res) => {
    try {
        const companyName = req.body.companyName;
        const pros = req.body.pros;
        const cons = req.body.cons;
        const rating = parseInt(req.body.rating);

        
        const newReview = await Review.create({          //Creating a new review records in my db
            companyName,
            pros,
            cons,
            rating,
        });

        res.status(200).json({ newReview }); 
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ error: 'An error occurred while adding the review' }); 
    }
};
   module.exports={addReview}