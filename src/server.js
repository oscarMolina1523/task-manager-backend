import app from './app.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 3000;

// Conecta la base de datos
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
