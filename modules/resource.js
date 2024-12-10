const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  views: {
    default: 0,
    type: Number,
  },
  rating: {
    default: 0.5,
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
  category: [String],
});

// Add indexes for fast queries
resourceSchema.index({ name: "text", description: "text" }); // Full-text search
resourceSchema.index({ category: 1 }); // Single field index

module.exports = mongoose.model("Resource", resourceSchema);
