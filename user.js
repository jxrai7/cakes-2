const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    location: String,
    email: String,
    years: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    menu: [String], 
<<<<<<< HEAD
    googleId: String, 
=======
>>>>>>> 823824543cc426c6ce8325dacd6b2cfd6cf5169e
})


module.exports = mongoose.model("User", userSchema)