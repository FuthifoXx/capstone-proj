const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A post must have a name'],
  },
  subtitle: {
    type: String,
    default: 'Programming post',
  },
  content: {
    type: String,
    required: [true, 'A post must have a content'],
  },
  author: {
    type: String,
    unique: true,
    required: [true, 'A post must have and author'],
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
