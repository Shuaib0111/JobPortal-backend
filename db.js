const mongoose = require('mongoose');
require('dotenv').config()


console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
const connectToDB = ()=>{
    mongoose.connect(`mongodb+srv://mohdshuaib77689:${process.env.PASSWORD}@jobfinder.k4jkf.mongodb.net/?retryWrites=true&w=majority&appName=jobFinder`)
    .then(() => console.log('connected to mongodb successfully'))
    .catch((err)=>console.log(err))
}

module.exports = connectToDB