const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, 
{   
    useNewUrlParser: true,
    useUnifiedTopology:true,
    dbName:"Podcast"
    // useFindAndModify: false,
    // useCreateIndex: true,
})
.then(() => {
    console.log("mongodb connected");
})
.catch(err => console.log(err.message));