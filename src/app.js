import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import setupSwagger from './utils/swagger.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Task Manager API', documentation: '/api-docs' });
});

setupSwagger(app);

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

export default app;
