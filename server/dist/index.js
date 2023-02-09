import express from 'express';
import router from './routes/index.js';
const app = express();
const port = process.env.PORT || 3333;
app.use(express.json());
app.use('/', router);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map