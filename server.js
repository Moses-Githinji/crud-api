import express, { json } from 'express';
import reportRoutes from './routes/reportRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json()); // Parse JSON bodies

// Routes
app.use('/api/reports', reportRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Field Report API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});