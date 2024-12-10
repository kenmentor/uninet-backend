const mongoose = require("mongoose");

async function connectDB() {
  const mongoURI = "mongodb://localhost:27017/testdb"; 
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

module.exports = connectDB;
