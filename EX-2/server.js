import express from 'express';
import articlesRoutes from './routes/articlesRoutes.js';
import journalistsRoutes from './routes/journalistsRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/articles', articlesRoutes);
app.use('/journalists', journalistsRoutes);
app.use('/categories', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
