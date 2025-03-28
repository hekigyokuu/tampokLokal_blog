const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
  const posts = await Blog.find();
  res.render('index', { posts });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/add', async (req, res) => {
  const { title, content } = req.body;
  await Blog.create({ title, content });
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const post = await Blog.findById(req.params.id);
  res.render('edit', { post });
});

router.post('/update/:id', async (req, res) => {
  const { title, content } = req.body;
  await Blog.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;