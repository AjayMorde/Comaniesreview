const Review = require('../connection/data');


const deleteReview= async (req, res) => {
  try {
    const companyId = req.params.id;                            // here extracts the id parameter from the request URL parameter
    console.log("------------>"+req.params.id);
    const data = await Review.findByPk(companyId);             // here i find an company record by its primary key
    if (!data) {
      res.status(400).json({ Error: " Not Found" });
      return;
    }
    let destroy = await data.destroy();
    res.status(200).json({ Data: destroy });
  }
  catch (err) {
    console.log(err);
    res.status(400).json({ failed: "Error Occurred" });
  }
}

module.exports =  {deleteReview}