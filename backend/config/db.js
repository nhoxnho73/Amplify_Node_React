require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://nhoxnho73:Ph10071992@cluster0.r98un.mongodb.net/shop?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log("MongoDB connection FAIL")
    process.exit(1);
  }
} 

module.exports = connectDB;