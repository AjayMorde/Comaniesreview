const express =require('express');
const app=express();

const bodyParser=require('body-parser');

const sequelize=require('./connection/database');
const cors=require('cors');
const submitreview=require('./routes/add-review');
const showAllreview=require('./routes/show-all-review');
const searchCompany=require('./routes/search-company');
const deleteReview=require('./routes/delete-review');



app.use(cors());
app.use(bodyParser.json({extended:false}));


app.use(express.static('public'));
app.use('/add-company-review',submitreview);
app.use('/show-all-reviews',showAllreview)
app.use('/search-company', searchCompany)
app.use('/delete-review', deleteReview);



sequelize
  .sync()
  .then((result) => {
    // console.log(result)
    
    app.listen(3000, ()=>
{
    console.log("Server Is Started on port 3000");
})})
  .catch(err => {
    console.log(err);
});

