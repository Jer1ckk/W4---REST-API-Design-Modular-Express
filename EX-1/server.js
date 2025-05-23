import express from 'express';
import userRoutes from './routes/userRoutes.js';
import logger from './middleware/logger.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
