const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A post must have a name'],
    trim: true,
  },
  subtitle: {
    type: String,
    default: 'Programming post',
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'A post must have a content'],
    trim: true,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    unique: true,
    required: [true, 'A post must have and author'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
