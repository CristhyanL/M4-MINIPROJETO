import express from 'express';
import {schoolRouter} from './src/routes/school.routes.js';

const app = express();
const port = 2727;

app.use(express.json());

app.use(schoolRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})