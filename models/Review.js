// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  rating: Number,
  comment: String,
  // other review properties
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

