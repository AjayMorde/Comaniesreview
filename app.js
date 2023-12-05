require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./connection/database');
const cors = require('cors');
const submitreview = require('./routes/add-review');
const showAllreview = require('./routes/show-all-review');
const searchCompany = require('./routes/search-company');
const deleteReview = require('./routes/delete-review');

const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use(express.static('public'));
app.use('/add-company-review', submitreview);
app.use('/show-all-reviews', showAllreview);
app.use('/search-company', searchCompany);
app.use('/delete-review', deleteReview);

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
