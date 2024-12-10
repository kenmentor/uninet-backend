// Import mongoose
const mongoose = require("mongoose");

// MongoDB connection string (update <username>, <password>, <dbname>)
const mongoURI = "mongodb://localhost:27017/sampleDB"; // Replace with your MongoDB URI

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model
const User = mongoose.model("User", userSchema);

// Example usage: Adding a new user
// async function addUser() {
//   try {
//     const newUser = new User({
//       name: "John Doe",
//       email: "john.doe@example.com",
//       age: 30,
//     });

//     const savedUser = await newUser.save();
//     console.log("User added successfully:", savedUser);
//   } catch (error) {
//     console.error("Error adding user:", error);
//   }
// }

// Call the function
addUser();

module.exports = { User }; // Exporting the model for reuse
