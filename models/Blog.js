const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  username: { type: String, trim: true },
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;