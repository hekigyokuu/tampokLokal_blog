require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// MongoDB connection while the pass is encrypted
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully..."))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// import routes
const blogRoutes = require('./routes/blogRoutes');
app.use('/', blogRoutes);

// listen to server 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});