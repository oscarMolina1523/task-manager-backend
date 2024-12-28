import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/api/tasks');
});

app.use('/api/tasks', taskRoutes);

export default app;
