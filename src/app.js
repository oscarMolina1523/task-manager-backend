import cors from 'cors';
import express from 'express';
import taskRoutes from './routes/taskRoutes.js';
import setupSwagger from './utils/swagger.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/api/tasks');
});

setupSwagger(app);

app.use('/api/tasks', taskRoutes);

export default app;
