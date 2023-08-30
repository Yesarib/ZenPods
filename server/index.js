const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const createError = require("http-errors");
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./Routes/Auth.js')


dotenv.config()
require('./Helpers/init_mongoDB.js')


const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());




app.use('/auth', authRoutes);



app.use(async (req,res, next) => {
    // const error = new Error("Not found")
    // error.status = 404
    // next(error)
    next(createError.NotFound());
})

app.use((err, req,res, next) => {
    res.status(err.status || 500)
    res.send({
        error:  {
            status: err.status || 500,
            message: err.message
        }
    })
})




const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})