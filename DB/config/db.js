const mongoose = require('mongoose')

const connectDB = () => {
    try {
        mongoose.connect('mongodb+srv://ishitaverma:ishita%40verma@projects.uwv24vr.mongodb.net/movies?appName=Projects');
        console.log("DB connected successfully!!");
    }
    catch (err) {
        console.log("Error Connecting DB: ", err)
    }
}
module.exports = connectDB;

