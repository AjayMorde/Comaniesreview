const Review=require('../models/data');

const searchCompany = async (req, res) => {
  const searchQuery = req.query.name;

  try {
    const company = await Review.findOne({
      where: { companyName: searchQuery },
    });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });    
    }

    
    res.status(200).json({
      companyName: company.companyName,
      pros: company.pros,
      cons: company.cons,
      rating: company.rating,
    });
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json({ error: 'An error occurr' });
  }
};

module.exports = { searchCompany };
