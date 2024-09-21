import express from 'express';
import {schoolRouter} from './routes/school.routes.js';
import path from 'path';

const app = express();
const port = 2727;

app.use(express.static(path.resolve('src/public')));

app.use(express.json());

app.use(schoolRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})