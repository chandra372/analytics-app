const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  revenue: Number,

  users: Number,

  apiUsage: Number,

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
