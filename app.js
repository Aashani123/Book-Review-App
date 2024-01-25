const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));


// Replace with your actual MongoDB connection string
const atlasConnectionString = 'mongodb+srv://ashanitranasinghe:KyWGnKUKFDcOIYI3:@cluster0.mongodb.net/<database>?retryWrites=true&w=majority';
const localConnectionString = 'mongodb://localhost:27017/<database>';

mongoose.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// Models
const Book = require('./models/Book');
const User = require('./models/User');
const Review = require('./models/Review');

// Routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/reviews', reviewRoutes);

// Routes that require authentication
app.use('/protected', protectedRoutes);

// Register route
app.post('/register', async (req, res) => {
  // Implement user registration logic
  // ...

  res.json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
  // Implement user login logic
  // ...

  // Generate a JWT token and send it to the client
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  res.json({ token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
