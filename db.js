const mongoose = require('mongoose');


const connectToDB = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@jobfinder.k4jkf.mongodb.net/?retryWrites=true&w=majority&appName=jobFinder`)
    .then(() => console.log('connected to mongodb successfully'))
    .catch(()=>console.log('error in connecting mongodb'))
}

module.exports = connectToDB